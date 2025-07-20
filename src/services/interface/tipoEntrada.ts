export interface CreateTipoEntradaInterface {
    idUsuario: number
    nome: string;
    descricao: string;
};

export interface ListTipoEntradaInterface {
    descricao: any;
    id: any;
    idUsuario?: number
};

export interface UpdateTipoEntradaInterface {
    id: number;
    nome?: string;
    descricao?: string;
};

export interface DeleteTipoEntradaInterface {
    id: number;
    idUsuario: number
};
