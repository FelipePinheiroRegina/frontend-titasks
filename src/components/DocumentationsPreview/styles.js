import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: .5rem;
    border: none;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 3.5rem;
    cursor: pointer;
    
    margin-bottom: .8rem;
    font-size: 1rem;
`