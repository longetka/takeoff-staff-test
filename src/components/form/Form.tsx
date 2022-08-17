import React from 'react';
import { FormStyled } from './Form.styles';

interface IForm {
    children: React.ReactNode;
    method: string;
}

export const Form: React.FC<IForm> = ({ children, method }) => {
    return (
        <FormStyled method={method} action="#">
            {children}
        </FormStyled>
    );
};
