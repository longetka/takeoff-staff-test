import React, { ChangeEvent } from 'react';
import { InputStyled } from './Input.styles';

interface IInput {
    id: string;
    type: string;
    placeholder: string;
    label: string;
    value: string;
    require?: boolean;
    onFn(e: ChangeEvent): void;
}

export const Input: React.FC<IInput> = ({
    id,
    type,
    placeholder,
    label,
    value,
    require,
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
                required={require}
                onChange={onFn}
            />
        </InputStyled>
    );
};
