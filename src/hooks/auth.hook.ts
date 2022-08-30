import { useState } from 'react';
import { login } from '../app/auth/authSlice';
import { useAppDispatch } from '../app/hooks';
import { useGetUsersQuery } from '../app/users/usersApi';
import { useNavigate } from 'react-router-dom';

let TUseAuthHook: [(email: string, password: string) => void, string];

export const useAuthHook = (): typeof TUseAuthHook => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const { data = [] } = useGetUsersQuery();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const findUser = (email: string) => {
        const user = data.find((item) => {
            if (email === item.email) {
                return item;
            } else {
                setErrorMessage('Пользователь не найден. Зарегистрируйтесь.');
            }
        });
        return user;
    };

    const validateAndDispatch = (email: string, password: string) => {
        const user = findUser(email);
        if (user) {
            if (password === user.password) {
                dispatch(login({ name: user.name, email: user.email }));
                navigate('/');
            } else {
                setErrorMessage('Пароль введен неверно');
            }
        }
    };

    return [validateAndDispatch, errorMessage];
};
