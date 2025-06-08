export interface CreateUser {
    name: string;
    password: string;
    email: string;
};

export interface ListUsers {
    id: number;
    name: string;
    email: string;
    active: boolean;
    createdAt: string;
};

export interface UpdateUser {
    id?: number;
    name?: string;
    password?: string;
    email?: string;
};

export interface DeleteUser {
    id: number;
};
