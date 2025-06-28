import { type AxiosResponse } from "axios";
import httpInstance from "../instance/client";
import { LoginInterface } from "@/services/interface/login";


// Listar usuários
export const userLogin = async (data: LoginInterface): Promise<AxiosResponse<LoginInterface>> => {
    return httpInstance.post('login', data);
};

