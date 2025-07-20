export interface CreateEntradaInterface {
    idUsuario: number;
    idTipoEntrada: number;
    valor: number;
    dataRecebimento: string;
    descricao: string
};

export interface ListEntradaInterface {
    idUsuario: number
};

export interface UpdateEntradaInterface {
    id: number;
    nome?: string;
    descricao?: string;
};

export interface DeleteEntradaInterface {
    id: number;
    idUsuario: number
};

