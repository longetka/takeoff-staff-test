import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ContactsResponse } from '../utils/types';
import { Contact } from '../utils/interfaces';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        getContacts: builder.query<ContactsResponse, void>({
            query: () => 'contacts',
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({
                              type: 'Contacts' as const,
                              id,
                          })),
                          { type: 'Contacts', id: 'LIST' },
                      ]
                    : [{ type: 'Contacts', id: 'LIST' }],
        }),
        addContact: builder.mutation<Contact, Partial<Contact>>({
            query(body) {
                return {
                    url: `contacts`,
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
        }),
    }),
});

export const { useGetContactsQuery, useAddContactMutation } = contactsApi;
