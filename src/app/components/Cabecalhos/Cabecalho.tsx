import { ReactNode } from "react";
import ThemeToggle from "../Tema/ThemeToggle";
import Login from "../Login/Login";


type Props = {
  titulo: string
  children?: ReactNode;
};

export default function Cabecalho({titulo, children }: Props) {
  return (
    <header className="flex flex-col items-centerl h-35 w-full bg-[#F0F0F0]">
      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
          <Login/>
          <ThemeToggle/>
        </div>
        <h1 className="text-center text-3xl font-bold">
            {titulo}
        </h1>
      </div>
      {children}
    </header>
  );
}
