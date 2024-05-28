import styled from "styled-components"

export const Container = styled.div`
    position: relative;

    display: grid;
    grid-template-rows: 120px auto;
    
    
    height: 100vh;
    width: 100%;

    > div:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`

export const Head = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`

export const Form = styled.form`
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    padding: 0 20px;

    div:nth-child(4) {
        margin-top: 24px;
    }

    button {
       margin-top: 20px;
    }
`
export const Avatar = styled.div`
    position: relative;
    text-align: center;
    margin-top: -80px;
    margin-bottom: 30px;
    
    > label {
        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 50px;
        cursor: pointer;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        background-color: ${({ theme }) => theme.COLORS.GREEN};
        border-radius: 50%;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
        }
    }

    img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
    }  
`