import styled from "styled-components"
import { FormHTMLAttributes } from "react"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(https://img.freepik.com/free-vector/abstract-green-geometric-background_23-2148374529.jpg?t=st=1729883700~exp=1729887300~hmac=ffceeaf758a6f0c507d2e07e1ee40dfb67fa1b98b62a81f20a72d339908b98e6&w=1380);
    background-repeat: no-repeat;
    background-size: cover;
`
export const Form = styled.form<FormHTMLAttributes<HTMLFormElement>>`
    width: 35rem;
    padding: 3.2rem;
    border-radius: .8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    h1 {
        font-size: 3.2rem;
        color: ${({ theme }) => theme.COLORS.GREEN};
        font-weight: 500;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 17rem;
    }

    a {
        width: 100%;
        text-decoration: none;
        display: flex;
        justify-content: center;
        font-style: italic;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    footer {
        a {
            text-decoration: underline;
        }
    }
`