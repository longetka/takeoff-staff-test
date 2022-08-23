import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IPrivateRoute {
    children: JSX.Element;
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({ children }) => {
    const isAuth = false;
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};
