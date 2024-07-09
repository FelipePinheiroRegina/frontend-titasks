import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    border-radius: 1rem;
    height: 3.5rem;

    font-size: 1rem;
    font-weight: normal;
    display: flex;
    place-items: center;
    justify-content: center;
    gap: 0.8rem;

    cursor: pointer;
    
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`