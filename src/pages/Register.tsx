import React from 'react';
import {
    Container,
    Button,
    Form,
    Title,
    Input,
    NavLink,
} from '../components/index';

export const Register: React.FC = () => {
    return (
        <Container direction="column">
            <Title text="Регистрация" />
            <Form method="POST">
                <Input
                    id="name"
                    type="text"
                    label="Имя"
                    placeholder="Введите своё Имя"
                    value={''}
                    onFn={(e) => console.log(e)}
                />
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
                <Button
                    text="Зарегистрироваться"
                    onFn={(e) => console.log(e)}
                />
                <p>у меня есть аккаунт</p>
                <NavLink href="/login" text="Войти" />
            </Form>
        </Container>
    );
};
