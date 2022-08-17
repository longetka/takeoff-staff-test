import React from 'react';
import { InputStyled } from './Input.styles';

interface IInput {
    id: string;
    type: string;
    placeholder: string;
    label: string;
}

export const Input: React.FC<IInput> = ({ id, type, placeholder, label }) => {
    return (
        <InputStyled htmlFor={id}>
            {label}
            <input id={id} type={type} placeholder={placeholder} />
        </InputStyled>
    );
};
