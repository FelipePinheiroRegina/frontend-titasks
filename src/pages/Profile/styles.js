import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    position: relative;

    display: grid;
    grid-template-rows: 7.5rem auto;
    
    
    height: 100vh;
    width: 100%;
`

export const Bar  = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    width: 100%;

    button {
        display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        button {
            display: block;
            border: none;
            background-color: transparent;
            width: max-content;
        }

        svg {
            font-size: 24px;
            margin-left: 144px;
            color: ${({ theme }) => theme.COLORS.GREEN};

            cursor: pointer;

            transition: transform ease .3s;
        }

        svg:hover {
            transform: scale(1.2);
        }
    }
`

export const Head = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`

export const Form = styled.form`
    width: 25rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    padding: 0 1.25rem;

    div:nth-child(4) {
        margin-top: 1.5rem;
    }

    button {
       margin-top: 1.25rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        
    }
`
export const Avatar = styled.div`
    position: relative;
    text-align: center;
    margin-top: -5rem;
    margin-bottom: 1.875rem;
    
    > label {
        width: 3rem;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 0.43rem;
        right: 6.125rem;
        cursor: pointer;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        background-color: ${({ theme }) => theme.COLORS.GREEN};
        border-radius: 50%;

        input {
            display: none;
        }

        svg {
            width: 1.25rem;
            height: 1.25rem;
        }
    }

    img {
        height: 9.375rem;
        width: 9.375rem;
        border-radius: 50%;
    }  
`