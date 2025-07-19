// import { type AxiosResponse } from "axios";
import httpInstance from "../../instance/client";
import { CreateUserInterface, DeleteUserInterface, ListUsersInterface, UpdateUserInterface } from "@/services/interface/user";


// Listar usuários
export const getUsersList = async (): Promise<ListUsersInterface[]> => {
  const { data } = await httpInstance.get<ListUsersInterface[]>("/users");
  return data;
};

// Criar Usuário
export const createUser = async (data: CreateUserInterface): Promise<CreateUserInterface> => {
  const response = await httpInstance.post<CreateUserInterface>('users/create', data);
  return response.data;
};

// Atualizar Usuário
export const updateUser = async (id: number, data: UpdateUserInterface): Promise<UpdateUserInterface> => {
  const response = await httpInstance.patch<UpdateUserInterface>(`users/update/${id}`, data);
  return response.data;
};

// Deletar Usuário
export const deleteUser = async (id: number): Promise<DeleteUserInterface> => {
  const response = await httpInstance.delete<DeleteUserInterface>(`users/delete/${id}`);
  return response.data;
};