import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    grid-area: headertop;
    width: 100%;
    height: 6.5rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    padding: 0.625rem;

    border-bottom: .1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    place-items: center;
    justify-content: center;
    gap: 100px;
    z-index: 1;
    
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        position: fixed;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }){
        justify-content: space-between;
        padding: 0 6.25rem;
    }
`

export const Avatar  = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
 
    img {
        width: 3.12rem;
        height: 3.12rem;
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`
export const Logout = styled.div`
    svg {
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        transition: transform ease 0.3s;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }){
        svg:hover {
            transform: scale(1.1);
        }
    }
`