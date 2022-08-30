import React from 'react';
import { Authentication, Container, Title } from '../components/index';

export const Login: React.FC = () => {
    return (
        <Container direction="column">
            <Title text="Вход" />
            <Authentication />
        </Container>
    );
};
