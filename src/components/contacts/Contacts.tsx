import React from 'react';
import { ContactsStyled } from './Contacts.styles';
import { ContactsRow } from '../index';
import { useGetContactsQuery } from '../../app/contacts/contactsApi';

export const Contacts: React.FC = () => {
    const { data = [] } = useGetContactsQuery();
    const renderContacts = data.map((contact, index) => {
        const { name, phone } = contact;
        return (
            <ContactsRow key={index} index={index} name={name} phone={phone} />
        );
    });
    return (
        <ContactsStyled>
            <table>
                <thead>
                    <tr>
                        <td>№</td>
                        <td>Ф.И.О.</td>
                        <td>Номер телефона</td>
                    </tr>
                </thead>
                <tbody>{renderContacts}</tbody>
            </table>
        </ContactsStyled>
    );
};
