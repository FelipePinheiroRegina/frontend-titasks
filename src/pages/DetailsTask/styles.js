import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    position: relative;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem;
    grid-template-rows: max-content auto max-content;
    justify-content: center;
    
    > div:nth-child(1) {
        position: fixed;
    }

    > div:nth-child(3) {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        grid-template-columns: 40rem;
    }
`

export const Content = styled.div`
    padding: 5rem 0;

    > .buttons-top {
        margin-top: 4rem;
        margin-bottom: 1.875rem;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        
        svg {
            font-size: 1.5rem;
        }

        .back {
            width: max-content;
            color: ${({ theme }) => theme.COLORS.GREEN};
            transition: transform ease .1s;
        }

        label {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
        }

        .button-open-status {
            transition: transform ease .1s;
            display: flex;
            align-items: center;
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
            .back:hover {
                transform: scale(1.2);    
            }

            .button-open-status:hover {
                transform: rotate(360deg);
            }
        } 
    }
   
    .task {
        padding: 1.25rem 1.875rem;
        margin-bottom: 3.375rem;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        .title-status {
           display: flex;
           align-items: flex-start;
           justify-content: space-between;

           h1 {
            font-size: 1.5rem;
           }

           margin-bottom: 1.875rem;

           .status-date {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 0.3rem;

                .status{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding-bottom: .3rem;
                    border-bottom: .1rem dashed ${({ theme }) => theme.COLORS.BACKGROUND_700};
                }

                .date {
                    padding-top: .3rem;
                    display: flex;
                    flex-direction: column;
                    text-align: right;
                    gap: 0.5rem;
                }
           }
        }

        .information {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            margin-bottom: 1rem;
            padding-bottom: .3rem;
            border-bottom: .1rem dashed ${({ theme }) => theme.COLORS.BACKGROUND_700};
            
            .criado-por {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                img {
                    border-radius: 50%;
                    width: 1rem;
                }
            }

            .created-at {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                svg {
                    color: ${({ theme }) => theme.COLORS.GREEN}
                }     
            } 

            > .deadline {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                svg {
                    color: ${({ theme }) => theme.COLORS.RED}
                }     
            } 
        }  

        > p {
            line-height: 1.2rem;

            margin-bottom: 3.375rem;
        }

        .image {
            position: relative;
            width: 100%;
            border: none;
            background-color: transparent;
            cursor: pointer;
            
            img {
                height: 12.5rem;
                filter: brightness(0.2);
            }

            svg {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: ${({ theme }) => theme.COLORS.GREEN};
            }
        }
    }
    

    > .openModal {
        position: fixed;
        bottom: 10%;
        right: 5%;

        border: none;
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        border-radius: 50%;
        color: ${({ theme }) => theme.COLORS.GREEN};  
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.125rem;
        height: 3.125rem;

        svg {
            font-size: 1.5rem;
        }
    }

    > .scrollTop {
        position: fixed;
        bottom: 18%;
        right: 5%;

        border: none;
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        border-radius: 50%;
        color: ${({ theme }) => theme.COLORS.GREEN};  
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 3.125rem;
        height: 3.125rem;

        svg {
            font-size: 1.5rem;
        } 
    }

    .button-open-status {
        border: none;
        background-color: transparent; 
        color: ${({ theme }) => theme.COLORS.GREEN};  
        cursor: pointer;
    } 

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        > .openModal:hover {
            transform: scale(1.1);
            transition: .3s;
        }

        > .scrollTop:hover {
            transform: scale(1.1);
            transition: .3s;
        }
    }
` 

export const ModalStatus = styled.div`
    position: fixed;
    z-index: 1;

    display: flex;
    flex-direction: column;
    
    gap: 2.25rem;

    padding: 1.875rem;

    width: 25rem;
    height: 25rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: .1rem dashed ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 0.5rem; 
    
    button:nth-child(1) {
        background-color: transparent;
        border: none;
        width: max-content;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.GREEN};
    }

    select {
        cursor: pointer;
        width: 100%;
        display: flex;
        margin: 0 auto;
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border: none;
        height: 3.5rem;
        font-size: 1.25rem;
        border-radius: 10px;
        padding: 0.5rem;
        color: ${({ theme }) => theme.COLORS.WHITE};  
        outline: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 40rem;

        button:nth-child(1):hover {
            transform: scale(1.1);
            transform: .3s;
        }
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.25rem;
    padding: 0px 3.75rem;

    button:nth-child(1) {
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.GREEN};
        width: max-content;
    }

    > form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        padding-bottom: 4rem;

        section {
            margin: 1.5rem 0;
        }

        label {
            display: flex;
            gap: 1.5rem;
           
            > button {
                border: none;
                background-color: transparent;
                color: ${({ theme }) => theme.COLORS.WHITE};
                cursor: pointer;
            }

            > svg {
                cursor: pointer;
            }
        }

        input {
           display: none;
        }
    
        img {
            height: 12.5rem;
            margin: 1.5rem auto 0;
        }
    }

    section {
        margin-bottom: 1.5rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        button:nth-child(1):hover {
            transform: scale(1.1);
        }
    }
`
