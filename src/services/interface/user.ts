export interface CreateUserInterface {
    nome: string;
    email: string;
    password: string;
};

export interface ListUsersInterface {
    id: number;
    nome: string;
    email: string;
    active: boolean;
    createdAt: string;
};

export interface UpdateUserInterface {
    id?: number;
    nome?: string;
    password?: string;
    email?: string;
};

export interface DeleteUserInterface {
    id: number;
};
