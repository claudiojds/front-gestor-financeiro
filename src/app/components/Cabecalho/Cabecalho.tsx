import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function Cabecalho({ children }: Props) {
  return (
    <header className="flex flex-col items-centerl h-35 w-full bg-[#F0F0F0]">
      <div className="flex flex-col flex-1">
        <div className="flex justify-end">
          <button className="">theme</button>
        </div>
        <h1 className="text-center text-3xl font-bold">
            Gestor Financeiro
        </h1>
      </div>
      {children}
    </header>
  );
}
