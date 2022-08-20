import React, { MouseEvent } from 'react';
import { ButtonStyled } from './Button.styled';

interface IButton {
    text: string;
    onFn(e: MouseEvent): void;
}

export const Button: React.FC<IButton> = ({ text, onFn }) => {
    return <ButtonStyled onClick={onFn}>{text}</ButtonStyled>;
};
