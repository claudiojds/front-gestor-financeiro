import { DecodedTokenInterface } from "@/services/interface/DecodedToken";
import { userLogin } from "@/services/lib/api/user/login";
import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        passwordHash: { label: "Senha", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.passwordHash) return null;

        /* Lógica de autenticação*/
        const user: any = await userLogin({
          email: credentials.email as string,
          passwordHash: credentials.passwordHash as string,
        });

        // UserLogin retorna um objeto com a propriedade 'token'
        const decoded = user?.token ? jwtDecode<DecodedTokenInterface>(user.token) : null;

        if (decoded?.id) {
          // Retorna um objeto que inclui a propriedade 'token'
          return {
            id: String(decoded.id),
            nome: decoded.nome,
            email: credentials.email,
            token: user.token as string, // passa token para o JWT callback
          } as { id: string; nome: string; email: string; token: string };
        }

        return null; // Falha na autenticação
      },
    }),
  ],

   // Configurações de sessão
  session: {
    strategy: "jwt", 
    maxAge: 30 * 60, // 30 minutos em segundos
  },

  // Configurações JWT (se usando estratégia JWT)
  jwt: {
    maxAge: 30 * 60, // 30 minutos em segundos
  },
 cookies: {
  sessionToken: {
    name: process.env.NODE_ENV === "production" 
      ? "__Secure-authjs.session-token" 
      : "authjs.session-token",
    options: {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 60, // 30 minutos
    },
  },
},

  // Primeiro salva o token na JWT interna do NextAuth
  callbacks: {
   async jwt({ token, user }) {
      if (user && 'token' in user) {
        token.accessToken = (user as any).token;
        token.nome = (user as any).nome;
        token.id = (user as any).id
        token.exp = Math.floor(Date.now() / 1000) + 30 * 60; // Força expiração em 30 minutos
      }
      return token;
    },

    //Depois coloca o token na sessão exposta ao client
    async session({ session, token }) {
      (session as any).accessToken = token.accessToken;
      (session.user as any).nome = (token as any).nome;
      (session.user as any).id = (token as any).id;
      return session;
    },
  },
});
