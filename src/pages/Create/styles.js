import styled from "styled-components"

export const Container = styled.div`
    position: relative;  
    
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: auto max-content;

    justify-content: center;
    height: 100vh;

    > div:nth-child(1) {
        position: fixed;
    }

    > div:nth-child(2) {
        padding-top: 90px;
        padding-bottom: 150px;
    }
`

export const Form = styled.div`
   

    > Section {
        margin-top: 30px;

        .deadline {
            display: flex;
            gap: 8px;
        }

        img {
            width: 100%;
            height: 100%;
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
`

export const Title = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;

    display: grid;
    grid-template-columns: 200px 200px;
    justify-content: space-between;
`

export const Head = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`


