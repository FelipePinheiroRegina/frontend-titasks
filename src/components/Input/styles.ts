import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

export const Container = styled.input<InputHTMLAttributes<HTMLInputElement>>`
    width: 100%;
    padding: 1.2rem 1.6rem;
    font-size: 1.6rem;

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
        outline: 2px solid ${({ theme }) => theme.COLORS.GREEN};
        border-radius: 8px;
    }
`