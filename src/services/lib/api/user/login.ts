// import { type AxiosResponse } from "axios";
import httpInstance from "../../instance/client";
import { LoginInterface } from "@/services/interface/login";


export const userLogin = async (data: LoginInterface): Promise<{token: string}> => {
    const response = await httpInstance.post('login', data);
    // console.log("Resposta da requisição: ", response.data)
    return response.data
};



