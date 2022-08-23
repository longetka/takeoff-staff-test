import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './hoc/PrivateRoute';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

export const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Main />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
};

export default App;
