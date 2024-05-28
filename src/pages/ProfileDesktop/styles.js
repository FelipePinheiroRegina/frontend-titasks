import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-rows: 150px auto;
    width: 100%;
`

export const Bar  = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    width: 100%;

    button {
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

export const Form  = styled.form`
    margin: 30px auto 0;
    width: 400px;

    > div:nth-child(4) {
        margin-top: 24px;
    }

    button {
        margin-top: 24px;
    }

    button:hover {
        filter: saturate(150%);
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -124px auto 32px;

    width: 186px;
    height: 186px;

    img {
        height: 186px;
        width: 186px;
        border-radius: 50%;
    }

    label { 
        display: flex;
        align-items: center;
        justify-content: center;

        height: 48px;
        width: 48px;
        border-radius: 50%;
        cursor: pointer;

        position: absolute;
        right: 7px;
        bottom: 7px;

        background-color: ${({ theme }) => theme.COLORS.GREEN};

        svg {
            height: 20px;
            width: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }

        input {
            display: none;
        }

        transition: transform ease .3s;
    }

    label:hover {
        transform: scale(1.2);
    }

    
`