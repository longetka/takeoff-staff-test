import React from 'react';
import { useAppSelector } from '../app/hooks';
import { selectAuth } from '../app/auth/authSlice';
import { Navigate, useLocation } from 'react-router-dom';

interface IPrivateRoute {
    children: JSX.Element;
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({ children }) => {
    const authState = useAppSelector(selectAuth);
    const location = useLocation();
    console.log(authState);

    if (!authState.isAuth) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};
