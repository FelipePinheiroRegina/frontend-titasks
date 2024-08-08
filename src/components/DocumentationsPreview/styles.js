import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    width: 80%;
    align-items: center;
    padding-left: 16px;
    gap: 0.5rem;
    border-radius: .5rem;
    border: none;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-transform: capitalize;
    height: 3.5rem;
    cursor: pointer;
    
    margin-bottom: .8rem;
    font-size: 1rem;
    transition: .2s ease-in-out;

    &:hover {
        margin-left: 8px;
        &::after {
            content: 'abrir documentação';
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`