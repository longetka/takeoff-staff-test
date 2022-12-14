import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './components/Global.styles';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { App } from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <GlobalStyles />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
