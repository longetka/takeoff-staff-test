import React, { useState, MouseEvent } from 'react';
import { useToggle } from '../../hooks/useToggle.hook';

import { ContactsRowStyled } from './ContactsRow.styles';
import { ContactsMenu } from '../index';

interface IContactsRow {
    id: string;
    name: string;
    phone: string;
}

export const ContactsRow: React.FC<IContactsRow> = ({ id, name, phone }) => {
    const [toggle, toggleValue] = useToggle(false);
    const [itemId, setItemId] = useState('');
    const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
        const { id } = e.currentTarget;
        setItemId(id);
        toggleValue();
    };

    return (
        <ContactsRowStyled onClick={clickHandler} id={id}>
            <p>{name}</p>
            <p>{phone}</p>
            {toggle ? <ContactsMenu id={itemId} /> : null}
        </ContactsRowStyled>
    );
};
