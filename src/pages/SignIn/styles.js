import styled from "styled-components"
import backgroundImg from "../../assets/bgtasks.jpg"

export const Container = styled.div`
    display: grid;
    place-content: center;
    height: 100vh;

    @media screen and (min-width: 900px){
        grid-template-columns: 600px 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 
        "left right"
        ;
    }
`
export const Form = styled.form`
    grid-area: left;
    max-width: 320px;
    
    display: flex;
    flex-direction: column;
    place-self: center;
    
    h1 {
        font-size: 24px;
        margin-bottom: 14px;
        color: ${({ theme }) => theme.COLORS.GREEN};
    }

    p {
        margin-bottom: 14px;
        line-height: 22px;
        text-align: justify;
    }

    p:nth-child(3) {
        font-size: 20px;
    }

    button {
        margin-top: 24px;
        margin-bottom: 24px;
    }

    @media screen and (min-width: 900px) {
        button:hover {
            filter: saturate(150%);
        }
    }
`

export const Background = styled.div`
    grid-area: right;
    display: none;
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

    @media screen and (min-width: 900px) {
        display: block;   
        width: 100%;
        
    }
`