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
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr;
        grid-template-areas:
        "headertop"
        "content"
        ;
    }
`

export const Content = styled.div`
    grid-area: content;
    margin-top: 10rem;
    
    flex-wrap: nowrap;
    
    > .header {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas:
        "title add"
        "search search"
        ; 

        gap: .8rem;

        > h1 {
            display: flex;
            grid-area: title;
            font-size: 1.5rem;
            align-items: center;
            font-weight: normal;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        > button {
            grid-area: add;
            background-color: transparent;
            border: none;
            border-radius: .5rem;
            cursor: pointer;
            text-align: right;
            
            svg {
                font-size: 1.5rem;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
            }
        }

        > input {
            grid-area: search;
            height: 3.5rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme }) => theme.COLORS.WHITE};
            border-radius: .8rem;
            border: none;
            outline: none;
            margin-bottom: 1rem;

            & {
                padding-left: 1rem;
                
            }
        }
    }

    > .documentations {
        overflow-y: auto;
        height: 30rem;
    }

    ::-webkit-scrollbar {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND}; 
        width: 1px;   
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.GREEN};
        border-radius: 8px;
    }

    .backDesk {
            display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 40rem;
        margin: 3rem auto;

        .backDesk {
            display: block;
            width: max-content;
            padding: 0 1rem;
        }
    }
`

