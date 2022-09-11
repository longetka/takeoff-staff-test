import styled from 'styled-components';

export const ContactsRowStyled = styled.div`
    position: relative;
    background-color: #bce0ff;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 1rem;
    width: 360px;
    display: flex;
    justify-content: space-evenly;
    &:hover {
        background-color: transparent;
        transform: scale(1.02);
        cursor: pointer;
    }
    span {
        position: absolute;
        right: -100px;
    }
`;
