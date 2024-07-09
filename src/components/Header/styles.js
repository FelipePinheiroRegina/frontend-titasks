import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    grid-area: headerbot;
    display: grid;
    grid-template-columns: repeat(5, max-content);
    grid-template-rows: 3.5rem;  
    place-content: center;
    place-items: center;
    gap: 2rem;
    z-index: 1;
    

    border-top: .1rem solid ${({ theme }) => theme.COLORS.GREEN};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`
