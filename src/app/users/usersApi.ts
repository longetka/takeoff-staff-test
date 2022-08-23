import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UsersResponse } from '../utils/types';
import { User } from '../utils/interfaces';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        getUsers: builder.query<UsersResponse, void>({
            query: () => 'users',
        }),
        addUser: builder.mutation<User, Partial<User>>({
            query(body) {
                return {
                    url: `users`,
                    method: 'POST',
                    body,
                };
            },
        }),
    }),
});

export const { useGetUsersQuery, useAddUserMutation } = usersApi;
