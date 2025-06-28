import axios, { AxiosInstance } from "axios";

if (!process.env.NEXT_PUBLIC_LOCAL_HOST) {
  throw new Error("Variável de ambiente NEXT_PUBLIC_LOCAL_HOST não está definida.");
}


const httpInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_HOST,
  headers: { "Content-Type": "application/json" },
  timeout: 3000,
});

httpInstance.interceptors.request.use(
  (req) => {
    console.log(`[Request] ${req.method?.toUpperCase()} ${req.url}`);
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
  (res) => {
    // Opcional: mostrar resposta só em dev
    if (process.env.NODE_ENV === "development") {
      console.log(`[Axios Response]  StatusCode: ${res?.status}` + "\n" +
        "Resposta", res.data
      ); 
    };
    return res;
  },
  (error) => {
    // Opcional: mostrar stack trace só em dev
    if (process.env.NODE_ENV === "development") {
      const status = error.response?.status;
      const url = error.config?.url;
      const method = error.config?.method?.toUpperCase();
      const data = error.response?.data;
      const message = data?.message || error.message;

      console.error(
        `[Axios Response Error] 
        ${method || ""} ${url || ""} | 
        Status: ${status || "?"}\n`,
        "Mensagem:", message,
        "\nDados:", data
      );

      // console.error(error.stack);
    }

    return Promise.reject(error);
  }
);

export default httpInstance;

