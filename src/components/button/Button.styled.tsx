import styled from 'styled-components';

export const ButtonStyled = styled.button`
    margin: 1.25rem 0;
    border: none;
    background-color: indigo;
    padding: 1rem 2.5rem;
    border-radius: 10px;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.2s ease-out;

    &:hover {
        background-color: cornflowerblue;
    }
    &:active {
        transform: scale(0.97);
    }
`;
