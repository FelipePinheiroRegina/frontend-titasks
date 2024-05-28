import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    height: 100vh;

   

    display: grid;
    grid-template-columns: 320px;
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
`

export const Content = styled.div`
    padding: 80px 0px;

    > .buttons-top {
        margin-top: 64px;
        margin-bottom: 30px;
        padding: 0px 10px;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        
         > button:nth-child(1) {
            width: max-content;
            text-align: left;
            color: ${({ theme }) => theme.COLORS.GREEN};

            
        }
    }
   

  
    .task {
        padding: 20px 30px;
        margin-bottom: 54px;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        .title-status {
           display: flex;
           align-items: flex-start;
           justify-content: space-between;

           h1 {
            font-size: 22px;
           }

           margin-bottom: 30px;

           .status-date {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 8px;

                .status{
                    display: flex;
                    gap: 8px;
                }

                .date {
                    display: flex;
                    flex-direction: column;
                    text-align: right;
                    gap: 8px;
                }
           }
        }

        .information {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 30px;
            

            .criado-por {
                display: flex;
                align-items: center;
                gap: 8px;

                img {
                    border-radius: 50%;
                    width: 16px;
                }
            }

            .created-at {
                display: flex;
                align-items: center;
                gap: 8px;

                svg {
                    color: ${({ theme }) => theme.COLORS.GREEN}
                }     
            } 

            > .deadline {
                display: flex;
                align-items: center;
                gap: 8px;

                svg {
                    color: ${({ theme }) => theme.COLORS.RED}
                }     
            } 
        }  

        > p {
            line-height: 22px;

            margin-bottom: 54px;
        }

        .image {
            position: relative;
            width: 100%;
            border: none;
            background-color: transparent;
            cursor: pointer;
            
            img {
                width: 100%;
                filter: blur(3px);
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
        width: 50px;
        height: 50px;

        svg {
            font-size: 24px;
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
        width: 50px;
        height: 50px;

        svg {
            font-size: 24px;
        }
    }

    .button-open-status {
        border: none;
        background-color: transparent; 
        color: ${({ theme }) => theme.COLORS.GREEN};  
        cursor: pointer;
        
    }  
` 

export const ModalStatus = styled.div`
    position: fixed;
    z-index: 1;

    display: flex;
    flex-direction: column;
    
    gap: 36px;

    padding: 30px;

    width: 320px;
    height: 400px;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: 1px solid  ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 8px; 
    
    button:nth-child(1) {
        background-color: transparent;
        border: none;
        width: 100%;
        text-align: left;
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
        height: 56px;
        font-size: 20px;
        border-radius: 10px;
        padding: 10px;
        color: ${({ theme }) => theme.COLORS.WHITE};  
        outline: none;
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
    gap: 10px;
    margin-top: 20px;
    padding: 0px 60px;

    button:nth-child(1) {
        border: none;
        background-color: transparent;
        text-align: right;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.GREEN};
    }

    > form {
        display: flex;
        flex-direction: column;
        gap: 8px;

        padding-bottom: 64px;

        section {
            margin: 24px 0px;
        }

        label {
            display: flex;
            gap: 24px;
           
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
            width: 100%;
            height: 200px;
            margin: 24px auto 0px;
        }
    }

    section {
        margin-bottom: 24px;
    }
`
