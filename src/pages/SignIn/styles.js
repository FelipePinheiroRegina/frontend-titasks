import styled from "styled-components"
import backgroundImg from "../../assets/bgtasks.jpg"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    display: grid;
    place-content: center;
    height: 100vh;

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }){
        grid-template-columns: 37.5rem 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 
        "left right"
        ;
    }
`
export const Form = styled.form`
    grid-area: left;
    max-width: 20rem;
    
    display: flex;
    flex-direction: column;
    place-self: center;
    
    h1 {
        font-size: 1.5rem;
        margin-bottom: 0.875rem;
        color: ${({ theme }) => theme.COLORS.GREEN};
    }

    p {
        margin-bottom: 0.875rem;
        line-height: 1.375rem;
        text-align: justify;
    }

    p:nth-child(3) {
        font-size: 1.25rem;
    }

    button {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
`

export const Background = styled.div`
    grid-area: right;
    display: none;
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
        display: block;   
        width: 100%;
        
    }
`