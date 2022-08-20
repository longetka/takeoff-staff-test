import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { Container, Input, Button } from '../index';
import { useAddContactMutation } from '../../app/contactsApi';

export const AddContact: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [addContact, { isError }] = useAddContactMutation();

    const clickHandler = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        addContact({ name, phone }).unwrap();
        setName('');
        setPhone('');
    };

    return (
        <Container direction="row">
            <Input
                id="name"
                type="text"
                label="Имя"
                placeholder="Введите имя"
                value={name}
                onFn={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                }
            />
            <Input
                id="phone"
                type="text"
                label="Номер телефона"
                placeholder="Введите номер телефона"
                value={phone}
                onFn={(e: ChangeEvent<HTMLInputElement>) =>
                    setPhone(e.target.value)
                }
            />
            <Button
                text="Добавить"
                onFn={(e: MouseEvent<HTMLElement>) => clickHandler(e)}
            />
            {isError ? <p>Error</p> : null}
        </Container>
    );
};
