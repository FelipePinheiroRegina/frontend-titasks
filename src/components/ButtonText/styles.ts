import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

// Interface que inclui a propriedade personalizada $isactive
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    $isactive: boolean; // Definindo a propriedade personalizada
}

export const Container = styled.button<ButtonProps>`
    width: 100%;
    display: flex;
    align-items: center;
    
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.4rem;
    color: ${({ theme, $isactive }) => $isactive? theme.COLORS.GREEN : theme.COLORS.WHITE};
    white-space: nowrap;

    transition: color .2s;

    &:hover {
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
`