import httpInstance from "../../instance/client";
import { ListTipoEntradaInterface, CreateTipoEntradaInterface, UpdateTipoEntradaInterface, DeleteTipoEntradaInterface } from "@/services/interface/tipoEntrada";

// Listar tipo entradas
export const getTipoList = async (idUsuario: number): Promise<ListTipoEntradaInterface[]> => {
    const {data} = await httpInstance.get<ListTipoEntradaInterface[]>(`tipoEntrada/listAll/${idUsuario}`);
    return data
};

//Criar tipo entradas
export const createTipo = async (data: CreateTipoEntradaInterface): Promise<CreateTipoEntradaInterface> => {
    const response = await httpInstance.post<CreateTipoEntradaInterface>('tipoEntrada/create', data)
    return response.data
};

// Editar tipo entrada
export const updateTipo = async (id: number, data: UpdateTipoEntradaInterface): Promise<UpdateTipoEntradaInterface> => {
    const response = await httpInstance.patch<UpdateTipoEntradaInterface>(`tipoEntrada/update/${id}`, data);
    return response.data
}

// Delete tipo entrada
export const deleteTipo = async (id: number, idUsuario: number): Promise<DeleteTipoEntradaInterface> => {
    const response = await httpInstance.delete<DeleteTipoEntradaInterface>(`tipoEntrada/delete/${id}/${idUsuario}`)
    return response.data
}