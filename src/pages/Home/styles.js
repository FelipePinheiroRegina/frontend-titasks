import styled from "styled-components"
import { Link } from "react-router-dom"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 20rem;
    grid-template-rows: max-content max-content max-content auto max-content;
    grid-template-areas: 
    "headertop"
    "search"
    "menu"
    "content"
    "headerbot"
    ;
    
    height: 100vh;
    justify-content: center;

    > .Logo {
        display: none;
    }

    > .NewTask {
        display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        > .Logo {
            grid-area: logo;
    
            color: ${({ theme }) => theme.COLORS.GREEN};
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

            display: flex;
            place-items: center;
            justify-content: center; 

            > h1 {
                font-size: 1.5rem;
            }
        }

        > .NewTask {
            grid-area: newtask;
            background-color: ${({ theme }) => theme.COLORS.GREEN};
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

            cursor: pointer;
            font-weight: bold;
            
            text-decoration: none;

            &:hover {
                filter: saturate(150%)
            }
            
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
        }

        display: grid;
        grid-template-columns: 15rem 1fr;
        grid-template-rows: 6.5rem 8rem auto 3rem;
        grid-template-areas: 
        "logo headertop"
        "menu search"
        "menu content"
        "newtask content"
        ;

        justify-content: flex-start;
    }
`
export const Logo  = styled.div`
    grid-area: logo;
`

export const Menu = styled.div`
    grid-area: menu;
    width: 100%;
    margin: 1rem 0;
    font-weight: 400;

    input[type="date"] {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE}; 
    } 

    input[type="date"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
        filter: invert(0.8) brightness(200%) sepia(100%) saturate(000000%) hue-rotate(20deg);
    }

    > .menuOptions {
        ul {
            margin-top: 1rem; 
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            list-style: none;
        }

        > .hidden {
            display: none;
        }

        .myTasks {
            display: none;
            padding: 1rem;
            animation: down .3s; 
        } 
            
        .myTasks.visible {
            display: block;
        }

        .options {
            display: none;
            padding: 1rem;
            animation: down .3s; 
        } 
        
        .options.visible {
            display: block;
        }
        
        .documentations {
            display: none;
        }

        .schedule {
            display: none;
        }
    } 

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding-top: 1rem;

        margin: 0;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        
        > .menuOptions {
            ul {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;
                list-style-type: none;
            }
           
            .hidden {
                display: block;
            }

            .myTasks {
                display: none;
                padding: 1rem;
                animation: down .3s; 
            } 
            
            .myTasks.visible {
                display: block;
            }

            .options {
                display: none;
                padding: 1rem;
                animation: down .3s; 
            } 
            
            .options.visible {
                display: block;
            }

            .documentations {
                display: none;
                padding-left: 1rem;
                padding-bottom: 1rem;
                animation: down .3s; 
            }

            .documentations.visible {
                display: block;
            }

            .schedule {
                display: none;
                padding-left: 1rem;
                padding-bottom: 1rem;
                animation: down .3s;
            }

            .schedule.visible {
                display: block;
            }
        } 

        @keyframes down {
            from {
                transform: translateY(-10%);
            }
        }
    }    
`
export const Search = styled.div`
    grid-area: search;
    margin-top: 9.375rem; 

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin-top: 0.5rem;
        padding: 0 2.5rem;
    }
`

export const Content = styled.div`
    grid-area: content;

    padding-bottom: 5rem;

    h2 {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        border-bottom: 0.1rem dashed ${({ theme }) => theme.COLORS.GRAY_300}; 
    }

    > .scrollTop {
        position: fixed;
        bottom: 13%;
        right: 5%;

        border: none;
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        border-radius: 50%;
        color: ${({ theme }) => theme.COLORS.GREEN};  
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.12rem;
        height: 3.12rem;

        svg {
            font-size: 1.5rem;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 0 2.5rem;
        overflow-y: auto;

        h2 {
            position: sticky;
        }

        > .scrollTop {
            display: none;
        }
    }
`

export const NewTask = styled(Link)`
   
`

export const ButtonOptions = styled.button`
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.BACKGORUND_900};
    cursor: pointer;
    border: none;
    margin-bottom: .2rem;

    font-weight: bold;
    
    &:hover {
        filter: saturate(150%)
    }
    
    span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: .5rem;   
    }
    
`
