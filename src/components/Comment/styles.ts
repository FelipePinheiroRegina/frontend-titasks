import styled from "styled-components"

export const Container = styled.form`
    max-width: 80rem;
    margin: 3.2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    
    .wrapper {
        visibility: hidden;
        max-height: 0px;
        max-width: max-content;

        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        button { 
            width: max-content;
        }
    }

    &:focus-within .wrapper {
        visibility: visible;
        max-height: none;
    }
`