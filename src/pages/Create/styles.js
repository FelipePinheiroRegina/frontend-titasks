import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    position: relative;  
    
    display: grid;
    grid-template-columns: 25rem;
    grid-template-rows: auto max-content;

    justify-content: center;
    height: 100vh;

    > div:nth-child(1) {
        position: fixed;
    }

    > div:nth-child(2) {
        padding-top: 5.62rem;
        padding-bottom: 9.375rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        grid-template-columns: 40rem;
    }
`

export const Form = styled.div`
    > Section {
        margin-top: 1.875rem;

        .deadline {
            display: flex;
            gap: 0.5rem;
        }

        img {
            height: 12.5rem;
            width: 100%;
            margin: auto;
        }

        label {
            svg {
                cursor: pointer;
            }

            input {
                display: none;
            }
        }

        .remove {
            display: flex;
            border: none;
            background-color: transparent;
            color: white;
            cursor: pointer;
        }
        
        select {
            width: 100%;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            border: none;
            height: 3.5rem;
            font-size: 1.25rem;
            border-radius: 0.625rem;
            padding: 0.625rem;
            color: ${({ theme }) => theme.COLORS.WHITE};  
            outline: none;
        }
   }

   > button {
        margin-top: 1.875rem;
   }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 2rem;
    margin-bottom: 2rem;

    button {
        display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        button {
            display: flex;
            border: none;
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.GREEN};
            cursor: pointer;
        
            svg {
                font-size: 1.5rem;
            }

            transition: transform ease .3s;
        }

        button:hover {
                transform: scale(1.2);
        }
    }
  
`

export const Head = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`


