import React from 'react';
import {
    Container,
    Contacts,
    Title,
    Subtitle,
    AddContact,
} from '../components/index';
import { useAppSelector } from '../app/hooks';
import { selectAuth } from '../app/auth/authSlice';

export const Main: React.FC = () => {
    const { name } = useAppSelector(selectAuth);

    return (
        <Container direction="column">
            <Title text={`Привет ${name}`} withBtn />
            <Subtitle text="Список контактов" />
            <Contacts />
            <AddContact />
        </Container>
    );
};
