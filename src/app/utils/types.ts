import { store } from '../store';
import { Contact, User } from './interfaces';

export type ContactsResponse = Contact[];

export type UsersResponse = User[];

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
