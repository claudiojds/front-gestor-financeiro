'use client';

import { useEffect, useState } from "react";
import { getTipoList } from "@/services/lib/api/tipoEntrada/tipoEntrada";
import { createEntrada } from "@/services/lib/api/entrada/entrada";
import ButtonSubmit from "@/app/components/FormComponents/Buttons/ButtonSubmit";
import FormGestor from "@/app/components/FormComponents/Forms/FormGestor";
import InputForm from "@/app/components/FormComponents/Inputs/InputForm";
import LabelForm from "@/app/components/FormComponents/Labels/LabelsForm";

export default function Entradas() {
  const [tipos, setTipos] = useState<{ id: number; descricao: string }[]>([]);
  const [form, setForm] = useState({
    idTipoEntrada: "",
    valor: "",
    descricao: "",
    // outros campos...
  });

  // Carrega os tipos de entrada ao montar o componente
  useEffect(() => {
    const fetchTipos = async () => {
      // Substitua pelo id do usuário logado
      const idUsuario = 1;
      const lista = await getTipoList(idUsuario);
      setTipos(lista);
    };
    fetchTipos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Chame a função para criar a entrada
    await createEntrada({
      ...form,
      idTipoEntrada: Number(form.idTipoEntrada),
      valor: Number(form.valor),
      // outros campos...
    });
    // Limpe o formulário ou mostre mensagem de sucesso
  };

  return (
    <div className="flex flex-col gap-3 p-2">
      {/* ...Formulário de criar tipo de entrada... */}

      {/* Lançar entrada */}
      <FormGestor clasName="flex flex-col gap-3 p-2" onSubmit={handleSubmit}>
        <h2 className="text-xl text-center">Lançar entrada</h2>
        <br />
        <div className="flex gap-2">
          <LabelForm htmlFor="idTipoEntrada" description="Tipo:" />
          <select
            name="idTipoEntrada"
            value={form.idTipoEntrada}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Selecione</option>
            {tipos.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.descricao}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <LabelForm htmlFor="valor" description="Valor:" />
          <InputForm
            type="number"
            name="valor"
            placeholder="Digite o valor"
            value={form.valor}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2">
          <LabelForm htmlFor="descricao" description="Descrição:" />
          <InputForm
            type="text"
            name="descricao"
            placeholder="Descrição da entrada"
            value={form.descricao}
            onChange={handleChange}
          />
        </div>
        <ButtonSubmit className="w-40" description="Adicionar" />
      </FormGestor>
    </div>
  );
}