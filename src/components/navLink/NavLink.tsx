import React from 'react';
import { NavLinkStyled } from './NavLink.styled';

interface INavLink {
    href: string;
    text: string;
}

export const NavLink: React.FC<INavLink> = ({ href, text }) => {
    return <NavLinkStyled to={href}>{text}</NavLinkStyled>;
};
