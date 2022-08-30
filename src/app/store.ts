import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { contactsApi } from './contacts/contactsApi';
import { usersApi } from './users/usersApi';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            contactsApi.middleware,
            usersApi.middleware
        ),
});
