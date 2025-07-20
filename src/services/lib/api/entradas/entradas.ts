import { CreateEntradaInterface } from "@/services/interface/entraas";
import httpInstance from "../../instance/client";


// Listar tipo entradas


//Criar tipo entradas
export const createEntrada = async (data: CreateEntradaInterface): Promise<CreateEntradaInterface> => {
    const response = await httpInstance.post<CreateEntradaInterface>('tipoEntrada/create', data)
    return response.data
};
