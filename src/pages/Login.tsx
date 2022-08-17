import React from 'react';
import {
    Container,
    Form,
    Title,
    Input,
    Button,
    NavLink,
} from '../components/index';

export const Login: React.FC = () => {
    return (
        <Container direction="column">
            <Title text="Вход" />
            <Form method="POST">
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Введите Email"
                />
                <Input
                    id="password"
                    type="password"
                    label="Пароль"
                    placeholder="Введите пароль"
                />
                <Button text="Войти" />
                <p>или</p>
                <NavLink href="/register" text="Зарегистрируйся" />
            </Form>
        </Container>
    );
};
