import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;

    > svg {
        font-size: 1.5rem; 
        color: ${({ theme, $isactive}) => $isactive? theme.COLORS.GREEN : theme.COLORS.WHITE};
    }
`