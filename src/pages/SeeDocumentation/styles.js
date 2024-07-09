import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 20rem;
    grid-template-rows: max-content 1fr max-content;
    grid-template-areas:
    "headertop"
    "content"
    "headerbot"
    ;
    
    justify-content: center;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        grid-template-columns: 1fr;
        
    }
`

export const Content = styled.div`
    grid-area: content;
    margin-top: 10rem;
    padding-bottom: 5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    
    .back {
        text-align: left;

        svg {
            font-size: 1.5rem;
            color: ${({ theme }) => theme.COLORS.GREEN};
        }   
    }

    > h1 {
        font-size: 1.5rem;
    }

    .create {
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    p {
        line-height: 1.2rem;
    }

    img {
        width: 100%;
        height: 12.5rem;
       
    }

    .step {
       p {
            margin-bottom: .5rem;
       }

       border-bottom: .1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
       padding-bottom: 1rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 35rem;
        margin: 3rem auto;
    }
`

export const ButtonWhichType = styled.button`
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 0 .5rem;
    gap: .5rem;
    
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    border-radius: .5rem;
    cursor: pointer;
`