import React from 'react';
import { ContactsRowStyled } from './ContactsRow.styles';

interface IContactsRow {
    index: number;
    name: string;
    phone: string;
}

export const ContactsRow: React.FC<IContactsRow> = ({ index, name, phone }) => {
    return (
        <ContactsRowStyled>
            <td>{`${index + 1}`}</td>
            <td>{name}</td>
            <td>{phone}</td>
        </ContactsRowStyled>
    );
};
