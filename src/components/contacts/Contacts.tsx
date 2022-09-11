import React from 'react';
import { ContactsStyled } from './Contacts.styles';
import { ContactsRow } from '../index';
import { useGetContactsQuery } from '../../app/contacts/contactsApi';

export const Contacts: React.FC = () => {
    const { data = [] } = useGetContactsQuery();
    const renderContacts = data.map((contact, index) => {
        const { id, name, phone } = contact;
        return <ContactsRow key={index} id={id} name={name} phone={phone} />;
    });
    return <ContactsStyled>{renderContacts}</ContactsStyled>;
};
