"use client";

import { LoginInterface } from "@/services/interface/login";
import { userLogin } from "@/services/lib/api/login";
import React, { useState } from "react";

export default function LoginUser({ onSuccess }: { onSuccess: (user: any) => void }) {
  const [login, setLogin] = useState<LoginInterface>({
    email: "",
    passwordHash: "",
  });

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const user = await userLogin({
        email: login.email,
        passwordHash: login.passwordHash,
      });

      onSuccess(user);
      console.log("Req: \n", user);
      setLogin({ email: "", passwordHash: "" });
    } catch (error: any) {
        const message = error?.response?.data.message || error?.message
        console.log(error);
        alert(`
            Erro ao tentar logar uauário!
            ${message}
        `);
    }
  }

  return (
    <form
      name="FormLogin"
      onSubmit={handleSubmit}
      className="flex flex-col gap-3"
    >
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={login.email}
            onChange={handleChangeLogin}
            className="form-input block w-full rounded border border-gray-300 px-3 py-2"
            required
        />
        <input
            type="password"
            name="passwordHash"
            placeholder="Senha"
            value={login.passwordHash}
            onChange={handleChangeLogin}
            className="form-input block w-full rounded border border-gray-300 px-3 py-2"
            required
        />

        {/* O botão já é por padrão type= submit e já dispara o evento fo form  */}
        <button 
            className="border bord-2 border-[#494844] rounded-sm h-10 w-40 hover:bg-[#494844] cursor-pointer"
        >
          Entrar
        </button>
    </form>
  );
}
