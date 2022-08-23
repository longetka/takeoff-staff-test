import React from 'react';
import { ContainerStyled } from './Container.styles';

interface IContainer {
    children: React.ReactNode;
    direction: string;
    align?: string;
}

export const Container: React.FC<IContainer> = ({
    children,
    direction,
    align,
}) => {
    return (
        <ContainerStyled direction={direction} align={align}>
            {children}
        </ContainerStyled>
    );
};
