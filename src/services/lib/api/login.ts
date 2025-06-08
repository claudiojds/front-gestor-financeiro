import { type AxiosResponse } from "axios";
import httpInstance from "../instance/client";
import { Login } from "@/services/interface/login";


// Listar usuários
export const getUsersList = async (): Promise<AxiosResponse<Login>> => {
    return httpInstance.get('users');
};

