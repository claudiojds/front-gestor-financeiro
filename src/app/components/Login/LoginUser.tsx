"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { LoginInterface } from "@/services/interface/login";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface LoginUserProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function LoginUser({ onClose, onSuccess }: LoginUserProps) {
  const [login, setLogin] = useState<LoginInterface>({
    email: "",
    passwordHash: "",
  });

  const { data: session, status } = useSession();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email: login.email,
      passwordHash: login.passwordHash,
    });

    if (result?.ok) {
      // Espera atualização da sessão
      setTimeout(() => {
        onSuccess(); // informa que login deu certo
        onClose();   // fecha modal
        router.refresh(); // força atualização
      }, 300);
    } else {
      alert("Erro ao tentar logar usuário");
      console.log("Erro:", result);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      console.log("Usuário logado:", session?.user);
      console.log("Token JWT:", (session as any)?.accessToken);
    }
  }, [status, session]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={login.email}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="password"
        name="passwordHash"
        placeholder="Senha"
        value={login.passwordHash}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <button className="bg-black text-white py-2 rounded">Entrar</button>
    </form>
  );
}
