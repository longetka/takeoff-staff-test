import React from 'react';
import { AddUser, Container, Title } from '../components/index';

export const Register: React.FC = () => {
    return (
        <Container direction="column">
            <Title text="Регистрация" />
            <AddUser />
        </Container>
    );
};
