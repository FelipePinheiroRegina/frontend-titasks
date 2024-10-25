import styled from "styled-components"

export const Container = styled.textarea`
    width: 100%;
    height: 20rem;
    padding: 1.2rem 1.6rem;
    font-size: 1.6rem;
    resize: none;


    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 8px;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-size:  1.4rem;
    }

    &:focus {
        border: none;
    }
`