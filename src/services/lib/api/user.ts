import { type AxiosResponse } from "axios";
import httpInstance from "../instance/client";
import { CreateUser, DeleteUser, ListUsers, UpdateUser } from "@/services/interface/user";


// Listar usuários
export const getUsersList = async (): Promise<AxiosResponse<ListUsers[]>> => {
    return httpInstance.get('users');
};

//Criar Usuário
export const createUser = async (data: CreateUser): Promise<AxiosResponse<CreateUser>> => {
    return httpInstance.post('users', data);
};

// update
export const updateUser = async (id: number, data: UpdateUser): Promise<AxiosResponse<UpdateUser>> => {
    return httpInstance.patch(`users/update/${id}`, data);
};


// delete 
export const deleteUser = async (id: number): Promise<AxiosResponse<DeleteUser>> => {
    return httpInstance.delete(`users/delete/${id}`)
}