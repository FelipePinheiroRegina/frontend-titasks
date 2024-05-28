import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;

    > svg {
        color: ${({ theme, $isactive}) => $isactive? theme.COLORS.GREEN : theme.COLORS.WHITE};
    }
`