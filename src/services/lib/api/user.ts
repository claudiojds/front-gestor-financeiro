import { type AxiosResponse } from "axios";
import httpInstance from "../instance/client";
import { CreateUserInterface, DeleteUserInterface, ListUsersInterface, UpdateUserInterface } from "@/services/interface/user";


// Listar usuários
export const getUsersList = async (): Promise<AxiosResponse<ListUsersInterface[]>> => {
    return httpInstance.get('users');
};

//Criar Usuário
export const createUser = async (data: CreateUserInterface): Promise<AxiosResponse<CreateUserInterface>> => {
    return httpInstance.post('users/create', data);
};

// update
export const updateUser = async (id: number, data: UpdateUserInterface): Promise<AxiosResponse<UpdateUserInterface>> => {
    return httpInstance.patch(`users/update/${id}`, data);
};


// delete 
export const deleteUser = async (id: number): Promise<AxiosResponse<DeleteUserInterface>> => {
    return httpInstance.delete(`users/delete/${id}`)
}