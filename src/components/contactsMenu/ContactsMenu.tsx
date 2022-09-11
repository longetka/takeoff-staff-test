import React from 'react';
import { ContactsMenuStyled } from './ContactsMenu.styles';
import { DeleteContact, EditContact } from '../index';
import { IMutationContacts } from '../../utils/interfaces';

export const ContactsMenu: React.FC<IMutationContacts> = ({ id }) => {
    return (
        <ContactsMenuStyled>
            <DeleteContact id={id} />
            <EditContact id={id} />
        </ContactsMenuStyled>
    );
};
