import styled from "styled-components"

interface Props {
    $isFinished: boolean 
}

export const Container = styled.div<Props>`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 1.6rem;
    border-radius: .8rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .container-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .image-name {
            display: flex;
            align-items: center;
            gap: .7rem;

            > img {
                height: 5.2rem;
            }

            > div {
                display: flex;
                flex-direction: column;
                gap: .3rem;
            }
        }
        

        > .details {
            display: flex;
            flex-direction: column;
            gap: .3rem;
            font-style: italic;    
            color: ${({ theme }) => theme.COLORS.GRAY_100}; 
            
            .status {
                color: ${({ theme, $isFinished}) => $isFinished === false ? theme.COLORS.YELLOW : theme.COLORS.GREEN}; 
            }

            .modal-task-card {
                position: relative;

                > svg {
                    font-size: 2rem;
                    cursor: pointer;
                    transition: .2s;

                    &:hover {
                        transform: scale(1.2);
                    }
                }
                
                > ul {
                    box-shadow: 0 0 2px ${({ theme }) => theme.COLORS.GREEN};
                    position: absolute;
                    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
                    list-style-type: none;
                    padding: 1.6rem;
                    border-radius: .8rem;
                    display: flex;
                    flex-direction: column;
                    gap: .8rem;

                    visibility: hidden;
                    opacity: 0;

                    transition: .3s;
                }

                &[data-modal-task-card="true"] {
                    > ul {
                        visibility: visible;
                        opacity: 1;
                    }
                }
            }
        }
    } 

    .openImage {
        font-size: 2rem;

        &:hover {
            color: ${({ theme }) => theme.COLORS.GREEN};
            cursor: pointer;
        }
    }
`