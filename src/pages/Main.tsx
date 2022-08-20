import React from 'react';
import {
    Container,
    Contacts,
    Title,
    Subtitle,
    AddContact,
} from '../components/index';

export const Main: React.FC = () => {
    return (
        <Container direction="column">
            <Title text={`Hello User`} />
            <Subtitle text="Список контактов" />
            <Contacts />
            <AddContact />
        </Container>
    );
};
