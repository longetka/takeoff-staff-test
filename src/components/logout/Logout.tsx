import React, { MouseEvent } from 'react';
import { LogoutStyled } from './Logout.styles';
import { logout } from '../../app/auth/authSlice';
import { useAppDispatch } from '../../app/hooks';

export const Logout: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(logout());
    };

    return <LogoutStyled onClick={handleLogout}>Выйти</LogoutStyled>;
};
