import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 20rem;
    grid-template-rows: max-content 1fr;
    grid-template-areas:
    "head"
    "form"
    ;
    
    justify-content: center;
    height: 100vh;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        grid-template-columns: 1fr;
        grid-template-rows: max-content max-content 1fr;
        grid-template-areas:
        "headertop"
        "head"
        "form"
        ;
    }
`

export const Head = styled.div`
    grid-area: head;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    
    margin-top: 10rem;
    margin-bottom: 1rem;
    
    > button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.GREEN}; 
        svg {
            font-size: 1.3rem;
        }
    }
    
    > h1 {
        font-size: 1.3rem;
        white-space: nowrap;
        font-weight: normal;
        
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 35rem;
        margin: 3rem auto;
   }
`

export const Form = styled.div`
    grid-area: form;
    padding-bottom: 3rem;

    > section {
        margin-top: 1.875rem;
        margin-bottom: 1.875rem;

        img {
            width: 12.5rem;
            margin: auto;
        }

        label {
            svg {
                cursor: pointer;
                font-size: 1.5rem;
            }

            input {
                display: none;
            }
        }

        svg {
            cursor: pointer;
            font-size: 1.5rem;
        }

        .remove {
            display: flex;
            border: none;
            background-color: transparent;
            color: white;
            cursor: pointer;
        }
   }

   > button {
        svg {
           font-size: 1.5rem; 
        }
   }

   @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 35rem;
        margin: auto;
   }
`