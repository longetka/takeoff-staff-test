import React from 'react';
import { ButtonStyled } from './Button.styled';

interface IButton {
    text: string;
}

export const Button: React.FC<IButton> = ({ text }) => {
    return <ButtonStyled type="submit">{text}</ButtonStyled>;
};
