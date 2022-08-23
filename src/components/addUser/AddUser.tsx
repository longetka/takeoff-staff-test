import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { Container, Input, Button, NavLink } from '../index';
import { useAddUserMutation } from '../../app/users/usersApi';

export const AddUser: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [addUser, { isError }] = useAddUserMutation();

    const clickHandler = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        addUser({ name, email, password });
    };

    return (
        <Container direction="column" align="center">
            {isError ? <p>Error</p> : null}
            <Input
                id="name"
                type="text"
                label="Имя"
                placeholder="Введите своё Имя"
                value={name}
                onFn={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                }
            />
            <Input
                id="email"
                type="email"
                label="Email"
                placeholder="Введите Email"
                value={email}
                onFn={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
            />
            <Input
                id="password"
                type="password"
                label="Пароль"
                placeholder="Введите пароль"
                value={password}
                onFn={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                }
            />
            <Button
                text="Зарегистрироваться"
                onFn={(e: MouseEvent<HTMLElement>) => clickHandler(e)}
            />
            <p>у меня есть аккаунт</p>
            <NavLink href="/login" text="Войти" />
        </Container>
    );
};
