import type { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    nome?: string;
  }
  interface Session extends DefaultSession {
    user: {
      nome?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
}