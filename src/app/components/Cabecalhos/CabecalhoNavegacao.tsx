"use client";
import { useState } from "react";
import Navegacao from "../Navegacao/Navegacao";
import NavMenu from "../NavMenu/NavMenu";
import Cabecalho from "./Cabecalho";

const navegacoes = [
  { caminho: "/", descricao: "Home", cor: "bg-[#cfcfcf]" },
  { caminho: "/entradas", descricao: "Entradas", cor: "bg-green-100" },
  { caminho: "/saidas", descricao: "Saidas", cor: "bg-red-100" },
  { caminho: "/poupanca", descricao: "Poupança", cor: "bg-sky-100" },
  { caminho: "/investimentos", descricao: "Investimentos", cor: "bg-yellow-100",},
  { caminho: "/metas", descricao: "Criar Metas", cor: "bg-stone-200" },
];

export default function CabecalhoNavegacao() {
  const [selecionado, setSelecionado] = useState(navegacoes[0].caminho);

  const corSelecionada =
    navegacoes.find((n) => n.caminho === selecionado)?.cor || "bg-[#cfcfcf]";

  return (
    <div>
      <Cabecalho titulo="Gestor Financeiro">
        <NavMenu>
          {navegacoes.map((nav) => (
            <Navegacao
              key={nav.caminho}
              caminho={nav.caminho}
              descricao={nav.descricao}
              clasName={`rounded-t-md hover:${nav.cor} ${
                selecionado === nav.caminho ? nav.cor : ""
              }`}
              onClick={() => setSelecionado(nav.caminho)}
            />
          ))}
        </NavMenu>
        <div className={`h-1.5 ${corSelecionada}`} id="barra"></div>
      </Cabecalho>
    </div>
  );
}
