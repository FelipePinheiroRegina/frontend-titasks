import styled from "styled-components"

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    h1 {
        font-size: 1rem;
        font-weight: normal;
    }

    > Section {
        

        img {
            width: 12.5rem;
            margin: auto;
        }

        label {
            svg {
                cursor: pointer;
                font-size: 1.5rem;
            }

            input {
                display: none;
            }
        }

        svg {
            cursor: pointer;
            font-size: 1.5rem;
        }

        .remove {
            display: flex;
            border: none;
            background-color: transparent;
            color: white;
            cursor: pointer;
        }
   }
`

export const Foot = styled.div`
    display: flex;
    justify-content: space-between;
`