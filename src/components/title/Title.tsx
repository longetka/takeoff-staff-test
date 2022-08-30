import React from 'react';
import { TitleStyled } from './Title.styles';
import { Logout } from '../index';

interface ITitle {
    text: string;
    withBtn?: boolean;
}

export const Title: React.FC<ITitle> = ({ text, withBtn = false }) => {
    return (
        <TitleStyled>
            <h1>{text}</h1>
            {withBtn ? <Logout /> : null}
        </TitleStyled>
    );
};
