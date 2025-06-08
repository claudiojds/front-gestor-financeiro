import axios, { AxiosInstance } from "axios";

const httpInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_HOST,
  headers: { "Content-Type": "application/json" },
  timeout: 3000,
});

httpInstance.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    console.error(
      "Erro na requisição: \n",
      error.response?.data || error.message
    );
    return Promise.reject(error);
  }
);

httpInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error(
      "Erro na requisição: \n",
      error.response?.data || error.message
    );
    return Promise.reject(error);
  }
);

export default httpInstance;
