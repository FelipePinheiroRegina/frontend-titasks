import { styled } from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: 70px;  
    place-content: center;
    place-items: center;
    gap: 70px;

    border-top: 1px solid ${({ theme }) => theme.COLORS.GREEN};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
`
