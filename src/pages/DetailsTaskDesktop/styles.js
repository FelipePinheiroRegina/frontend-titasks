import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;


    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content"
    ;
   
    justify-content: center;
    
`

export const Content = styled.div`
    width: 800px;
    padding: 80px 0px;

    > .buttons-top {
        display: flex;
        justify-content: space-between;
        margin-top: 64px;
        margin-bottom: 30px;

        div {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        button {
            border: none;
            background-color: transparent; 
            color: ${({ theme }) => theme.COLORS.GREEN};  
            cursor: pointer;

            span {
                font-size: 20px;
            }
        }

        svg {
            font-size: 20px;
        }
        
        .back {
            transition: transform ease 0.3s;
        }

        .back:hover {
            transform: scale(1.2);    
        }

        .button-open-status {
            display: flex;
            align-items: center;
            gap: 8px;

            transition: transform ease 0.3s;
        }

        .button-open-status:hover {
            transform: rotate(360deg);
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
            font-size: 28px;
           }

           margin-bottom: 30px;

           .status-date {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 8px;

                font-size: 20px;

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
            font-size: 20px;

            .criado-por {
                display: flex;
                align-items: center;
                gap: 8px;

                
                color: ${({ theme }) => theme.COLORS.GRAY_100};

                img {
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                }
            }

            .created-at {
                display: flex;
                align-items: center;
                gap: 8px;

                svg {
                    font-size: 30px;
                    color: ${({ theme }) => theme.COLORS.GREEN}
                }     
            } 

            > .deadline {
                display: flex;
                align-items: center;
                gap: 8px;

                svg {
                    font-size: 30px;
                    color: ${({ theme }) => theme.COLORS.RED}
                }     
            } 
        }  

        > p {
            line-height: 24px;
            font-size: 22px;
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
                font-size: 30px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: ${({ theme }) => theme.COLORS.GREEN};
            }
        }

        .image:hover {
            img {
                filter: blur(0px);
            }
        }
    }
    

    > .openModal {
        position: fixed;
        bottom: 5%;
        right: 3%;

        border: none;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 50%;
        color: ${({ theme }) => theme.COLORS.GREEN};  
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;

        box-shadow: 1px 1px 8px 3px black;

        svg {
            font-size: 30px;
        }

        transition: transform ease 0.3s;
    }

    > .openModal:hover {
        transform: scale(1.2);
    }

    > .scrollTop {
        position: fixed;
        bottom: 5%;
        right: 12%;

        border: none;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 50%;
        color: ${({ theme }) => theme.COLORS.GREEN};  
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;

        box-shadow: 1px 1px 8px 3px black;

        svg {
            font-size: 30px;
        }

        transition: transform ease 0.3s;
    }

    > .scrollTop:hover {
        transform: scale(1.2);
    }
` 

export const ModalStatus = styled.div`
    position: fixed;
    z-index: 1;

    display: flex;
    flex-direction: column;
    
    gap: 36px;

    padding: 30px;

    width: 800px;
    height: 400px;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: 1px solid  ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 8px; 
    
    button:nth-child(1) {
        background-color: transparent;
        border: none;
        width: max-content;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.GREEN}; 
        
        transition: transform ease 0.3s;
    }

    button:nth-child(1):hover {
       transform: scale(1.2);
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

    .submit-status:hover {
        filter: saturate(150%);
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 100%;
    height: 100%;

    z-index: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;

    .Container-answer {
        position: relative;
        width: 60%;

        margin: auto;

        .closeModal {
            position: absolute;
            right: 0;
            top: 2%;

            width: max-content;
            margin-top: 8px;
            border: none;
            background-color: transparent;
            
            cursor: pointer;
            color: ${({ theme }) => theme.COLORS.GREEN};

            svg {
            font-size: 24px; 
            }

            transition: transform ease 0.3s;
        }

        .closeModal:hover {
            transform: scale(1.2);
        }
    
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-bottom: 64px;

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

        .prints {
            img {
                width: 100%;
                height: 300px;
                margin: 24px auto 0px;
            }
        }

        input {
           display: none;
        }

        button:hover {
            filter: saturate(150%);
        }
    }
}   
`
