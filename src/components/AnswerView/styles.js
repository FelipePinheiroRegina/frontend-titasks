import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 20px 30px;
    border-radius: 8px;

    margin: 10px 0px 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    .details {
        display: flex;
        flex-direction: column;
        gap: 16px;

        margin-bottom: 14px;

        .count {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.COLORS.GREEN};
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }

        span {
            display: flex;
            gap: 8px;

            img {
                width: 16px;
                height: 16px;
                border-radius: 50%;
            }

            svg {
                color: ${({ theme }) => theme.COLORS.GREEN};
            }
        }
    }

    .print {
        position: relative;
        cursor: pointer;
        border: none;
        background-color: transparent;

        img {
            width: 100%;
            filter: blur(3px);
            
        }

        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
    }

    @media screen and (min-width: 900px) {
            .details {
                .count {
                    width: 30px;
                    height: 30px;

                    font-size: 20px;
                }

                .img-por-name {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    font-size: 20px;

                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }
            

            .created-at {
                display: flex;
                flex-direction: row;
                align-items: center;

                font-size: 20px;

                svg {
                    font-size: 30px;
                }
            }

           
            .print:hover {
                img {
                    filter: blur(0px);
                }
            } 
        }
`