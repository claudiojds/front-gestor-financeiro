"use client";

import { CreateUserInterface } from "@/services/interface/user";
import { createUser } from "@/services/lib/api/user/user";
import React, { useState } from "react";

export default function CreateUser({ onSuccess }: { onSuccess: () => void }) {
  const [creat, setCreat] = useState<CreateUserInterface>({
    nome: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreat({ ...creat, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  try {
    // Aqui você recebe só os dados do usuário criado
    const userCreated = await createUser({
      nome: creat.nome,
      email: creat.email,
      password: creat.password,
    });

    onSuccess();
    alert("Usuário criado com sucesso!");
    console.log("Usuário criado:", userCreated);
    setCreat({ nome: "", email: "", password: "" });
  } catch (error: any) {
    console.log("Erro na resposta:", error?.response?.data);
    const message = Array.isArray(error?.response?.data?.message)
      ? error.response.data.message.join('\n')
      : error?.response?.data?.message || error?.message;
    alert(`Erro ao tentar criar usuário!\n${message}`);
  }
}

  return (
    <form
      name="FormCreateUser"
      onSubmit={handleSubmit}
      className="flex flex-col gap-3"
    >
        <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={creat.nome}
            onChange={handleChange}
            className="form-input block w-full rounded border border-gray-300 px-3 py-2"
            required
        />
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={creat.email}
            onChange={handleChange}
            className="form-input block w-full rounded border border-gray-300 px-3 py-2"
            required
        />
        <input
            type="password"
            name="password"
            placeholder="Senha"
            value={creat.password}
            onChange={handleChange}
            className="form-input block w-full rounded border border-gray-300 px-3 py-2"
            required
        />

        {/* O botão já é por padrão type= submit e já dispara o evento fo form  */}
        <button className="border bord-2 border-[#494844] rounded-sm h-10 w-40 hover:bg-[#494844] cursor-pointer">
          Criar Usuário
        </button>
    </form>
  );
}
