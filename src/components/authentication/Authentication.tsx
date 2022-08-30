import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { Form, Input, Button, NavLink } from '../index';
import { useAuthHook } from '../../hooks/auth.hook';

export const Authentication: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [validateAndDispatch, errorMessage] = useAuthHook();

    const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    };

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        validateAndDispatch(email, password);
    };

    return (
        <Form method="POST">
            {<p>{errorMessage}</p>}
            <Input
                id="email"
                type="email"
                label="Email"
                placeholder="Введите Email"
                value={email}
                onFn={setValueHandler}
            />
            <Input
                id="password"
                type="password"
                label="Пароль"
                placeholder="Введите пароль"
                value={password}
                onFn={setValueHandler}
            />
            <Button text="Войти" onFn={clickHandler} />
            <p>или</p>
            <NavLink href="/register" text="Зарегистрируйся" />
        </Form>
    );
};
