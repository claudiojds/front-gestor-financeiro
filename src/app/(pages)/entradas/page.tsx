"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getTipoList } from "@/services/lib/api/tipoEntrada/tipoEntrada";
import { createEntrada } from "@/services/lib/api/entradas/entradas";
import { CreateEntradaInterface } from "@/services/interface/entraas";
import BtnForm from "@/app/components/FormComponents/Buttons/BtnForm";
import FormGestor from "@/app/components/FormComponents/Forms/FormGestor";
import InputForm from "@/app/components/FormComponents/Inputs/InputForm";
import LabelForm from "@/app/components/FormComponents/Labels/LabelsForm";

export default function Entradas() {
  const { data: session, status } = useSession();
  const [tipos, setTipos] = useState<{ id: number; descricao: string }[]>([]);
  const [valores, setValores] = useState<{ [id: number]: string }>({});

  useEffect(() => {
  if (status === "authenticated" && session?.user?.id) {
    getTipoList(Number(session.user.id)).then((lista) => {
      setTipos(
        lista.map((item) => ({
          id: item.id,
          descricao: item.descricao,
        }))
      );
    });
  }
}, [status, session?.user?.id]);

  const handleInputChange = (id: number, value: string) => {
    setValores((prev) => ({ ...prev, [id]: value }));
  };

  const handleLancarEntradas = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user?.id) return;

    for (const tipo of tipos) {
      const valor = valores[tipo.id];
      if (valor && !isNaN(Number(valor))) {
        const entrada: CreateEntradaInterface = {
          idUsuario: Number(session.user.id),
          idTipoEntrada: tipo.id,
          valor: Number(valor),
          descricao: tipo.descricao,
          dataRecebimento: ""
        };
        await createEntrada(entrada);
      }
    }
    setValores({});
  };

  if (status !== "authenticated") {
    return <div className="p-4 text-center">Faça login para lançar entradas.</div>;
  }

  return (
    <div className="flex flex-col gap-3 p-2">
      <FormGestor clasName="flex flex-col gap-3 p-2" onSubmit={handleLancarEntradas}>
        <div className="flex flex-col gap-4">
          {tipos.map((tipo) => (
            <div key={tipo.id} className="flex items-center gap-2">
              <LabelForm
                htmlFor={`entrada-${tipo.id}`}
                description={`[${tipo.id}] ${tipo.descricao}`}
              />
              <InputForm
                type="number"
                placeholder="Valor"
                className="w-32"
                value={valores[tipo.id] || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(tipo.id, e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-5 mt-4">
          <BtnForm className="w-80" description="Lançar Entradas" type="submit"/>
          <BtnForm className="w-80" description="Formulário Tipo de Entrada" type="submit"/>
        </div>
      </FormGestor>
    </div>
  );
}