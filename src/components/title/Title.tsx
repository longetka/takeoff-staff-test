import React from 'react';
import { TitleStyled } from './Title.styles';

interface ITitle {
    text: string;
}

export const Title: React.FC<ITitle> = ({ text }) => {
    return <TitleStyled>{text}</TitleStyled>;
};
