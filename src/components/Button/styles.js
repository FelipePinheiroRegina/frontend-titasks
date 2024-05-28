import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    border-radius: 1rem;
    border: none;
    height: 56px;

    font-size: 16px;
    font-weight: normal;

    cursor: pointer;
    
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`