'use client';

import ButtonSubmit from "@/app/components/FormComponents/Buttons/ButtonSubmit";
import FormGestor from "@/app/components/FormComponents/Forms/FormGestor";
import InputForm from "@/app/components/FormComponents/Inputs/InputForm";
import LabelForm from "@/app/components/FormComponents/Labels/LabelsForm";
import SelctForm from "@/app/components/FormComponents/Dropdowm/SelectForm";

export default function Entradas() {
  return (
    <div className="flex flex-col gap-3 p-2">
      {/* Criar tipo entrada */}
       <FormGestor
        clasName="border-b-2 border-gray-300"
      >
        <LabelForm
          htmlFor="tipo-entrada"
          classNama="" 
          description="Criar tipo de entrada: "        
        />
        <InputForm
          type="text"
          placeholder="Digite o tipo de entrada"
          className="w-15 "
        />

        <ButtonSubmit
         className="w-40"
         description="Adicionar"
        />
      </FormGestor>
      
      {/* Adicionar entrada */}
      <FormGestor
        clasName=" "
      >
        <div className="flex gap-2">
          <SelctForm
            nome="Tipo-entrada"
            className=""
          />

          <InputForm
            type="text"
            placeholder="Digite o valor"
            className="w-15 "    
          />
        </div>
        
      </FormGestor>
    </div>
  );
}
