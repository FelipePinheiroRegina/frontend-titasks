import styled from "styled-components"

export const Container = styled.div`
    position: relative;  
    width: 100%;

    display: grid;
    grid-template-rows:  max-content max-content 1fr;
`

export const Form = styled.div`
    width: 100%;
    max-width: 60rem;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;
    gap: 2rem;

    .container-image {
        img {
            height: 12.5rem;
            width: 100%;
            margin-inline: auto;
            object-fit: contain;
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
    }
    
    button {
        max-width: max-content;
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 2.4rem;
    }

    button {
        display: flex;
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.GREEN};
        cursor: pointer;
    
        svg {
            font-size: 2.4rem;
        }

        transition: transform ease .3s;
    }

    button:hover {
            transform: scale(1.2);
    }

`
