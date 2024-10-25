import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: max-content 80px auto;
    
`

export const Bar  = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    width: 100%;

    button {
        display: block;
        border: none;
        background-color: transparent;
        width: max-content;
    }

    svg {
        font-size: 24px;
        margin-left: 144px;
        color: ${({ theme }) => theme.COLORS.GREEN};

        cursor: pointer;

        transition: transform ease .3s;
    }

    svg:hover {
        transform: scale(1.2);
    }
`

export const Form = styled.form`
    width: 40rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

`

export const Avatar = styled.div`
    position: relative;
    text-align: center;
    margin-top: -5rem;
    margin-bottom: 1.875rem;
    
    > label {
        width: 4rem;
        height: 4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 0.43rem;
        right: 13rem;
        cursor: pointer;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        background-color: ${({ theme }) => theme.COLORS.GREEN};
        border-radius: 50%;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
        }
    }

    img {
        height: 15rem;
        width: 15rem;
        border-radius: 50%;
        object-fit: contain;
    }  
`