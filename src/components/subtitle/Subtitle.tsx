import React from 'react';
import { SubtitleStyled } from './Subtitle.styles';

interface ISubtitle {
    text: string;
}

export const Subtitle: React.FC<ISubtitle> = ({ text }) => {
    return <SubtitleStyled>{text}</SubtitleStyled>;
};
