import styled from "styled-components";

export const Container = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;

    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE};
`