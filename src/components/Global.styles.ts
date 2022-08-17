import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, ::before, ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        font-family: 'Jost', sans-serif;
        background-color: aliceblue;
    }
`;
