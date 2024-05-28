import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ; 
`

export const Form = styled.div`
    width: 600px;
    margin: auto;
    padding-top: 150px;
    padding-bottom: 60px;

    > Section {
        margin-top: 30px;

        .deadline {
            display: flex;
            gap: 8px;
        }

        img {
            width: 100%;
            height: 300px;
        }

        label {
            svg {
                cursor: pointer;
            }

            input {
                display: none;
            }
        }

        .remove {
            display: flex;
            border: none;
            background-color: transparent;
            color: white;
            cursor: pointer;
        }
        
        select {
            width: 100%;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            border: none;
            height: 56px;
            font-size: 20px;
            border-radius: 10px;
            padding: 10px;
            color: ${({ theme }) => theme.COLORS.WHITE};  
            outline: none;
        }
   }

   > button {
        margin-top: 30px;
   }

   > button:hover {
        filter: saturate(150%);
   }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 30px;

   button {
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.GREEN};
        cursor: pointer;
        
        svg {
            font-size: 24px;
        }

        transition: transform ease .3s;
   }

   button:hover {
        transform: scale(1.2);
   }
`