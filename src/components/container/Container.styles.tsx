import styled from 'styled-components';

interface IContainerStyled {
    direction: string;
}

export const ContainerStyled = styled.main<IContainerStyled>`
    display: flex;
    flex-direction: ${(props) => props.direction};
`;
