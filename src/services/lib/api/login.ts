// import { type AxiosResponse } from "axios";
import httpInstance from "../instance/client";
import { LoginInterface } from "@/services/interface/login";


// Listar usuários
export const userLogin = async (data: LoginInterface): Promise<LoginInterface> => {
    const response = await httpInstance.post<LoginInterface>('login', data);
    return response.data
};



