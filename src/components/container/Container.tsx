import React from 'react';
import { ContainerStyled } from './Container.styles';

interface IContainer {
    children: React.ReactNode;
    direction: string;
}

export const Container: React.FC<IContainer> = ({ children, direction }) => {
    return <ContainerStyled direction={direction}>{children}</ContainerStyled>;
};
