import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLinkStyled = styled(Link)`
    margin: 1.25rem 0;
    font-size: 1.25rem;
    text-decoration: none;
    color: blue;

    &:hover {
        text-decoration: underline;
    }
`;
