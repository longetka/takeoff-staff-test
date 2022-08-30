import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../utils/types';
import { AuthState } from '../utils/interfaces';

const initialState: AuthState = {
    isAuth: false,
    name: '',
    email: '',
};

interface IAuthDataPayload {
    name: string;
    email: string;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IAuthDataPayload>) => {
            state.isAuth = true;
            state.email = action.payload.email;
            state.name = action.payload.name;
        },
        logout: (state) => {
            state.isAuth = false;
            state.name = '';
            state.email = '';
        },
    },
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
