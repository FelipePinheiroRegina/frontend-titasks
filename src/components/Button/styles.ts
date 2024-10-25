import styled from "styled-components"
import { ButtonHTMLAttributes } from "react"

export const Container = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
    width: 100%;
    border-radius: 8px;   
    font-size: 1.4rem;
    cursor: pointer;
    padding: 1.2rem 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};

    transition: color .2s, background-color .2s;

    &:focus {
        border: none;
    }

    &:not(:disabled) {
        &:hover {
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`