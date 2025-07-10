'use client';

import { ReactNode } from "react";
import ThemeToggle from "../Tema/ThemeToggle";
import LoginDropdown from "../Login/LoginDropdown";
import { SessionProvider } from "next-auth/react";

type Props = {
  titulo: string;
  children?: ReactNode;
};

export default function Cabecalho({ titulo, children }: Props) {
  return (
    <SessionProvider>
      <header className="flex flex-col items-center h-35 w-full bg-[#F0F0F0]">
        <div className="flex flex-col flex-1 w-full">
          <div className="flex justify-between items-center px-4 py-2">
            <LoginDropdown />
            <ThemeToggle />
          </div>
          <h1 className="text-center text-3xl font-bold mt-2">{titulo}</h1>
        </div>
        {children}
      </header>
    </SessionProvider>
  );
}