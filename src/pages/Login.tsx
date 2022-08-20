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
                    value={''}
                    onFn={(e) => console.log(e)}
                />
                <Input
                    id="password"
                    type="password"
                    label="Пароль"
                    placeholder="Введите пароль"
                    value={''}
                    onFn={(e) => console.log(e)}
                />
                <Button text="Войти" onFn={(e) => console.log(e)} />
                <p>или</p>
                <NavLink href="/register" text="Зарегистрируйся" />
            </Form>
        </Container>
    );
};
