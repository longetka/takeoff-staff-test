export interface Contact {
    id: string;
    name: string;
    phone: string;
}

export interface User {
    id: number;
    email: string;
    name: string;
    password: string;
}

export interface AuthState {
    isAuth: boolean;
    name: string;
    email: string;
}
