import React, { ChangeEvent } from 'react';
import { InputStyled } from './Input.styles';

interface IInput {
    id: string;
    type: string;
    placeholder: string;
    label: string;
    value: string;
    onFn(e: ChangeEvent): void;
}

export const Input: React.FC<IInput> = ({
    id,
    type,
    placeholder,
    label,
    value,
    onFn,
}) => {
    return (
        <InputStyled htmlFor={id}>
            {label}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onFn}
            />
        </InputStyled>
    );
};
