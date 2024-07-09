import styled from "styled-components"

export const Close = styled.div`
    button {
        position: absolute;
        right: 10px;
        top: 5px; 
        cursor: pointer;
        border: none;
        background-color: transparent;
        
        svg {
            font-size: 1.5rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100}; 
        }
    }
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    h1 {
        font-size: 1rem;
        font-weight: normal;
    }

    label {
            display: flex;
            flex-direction: column;
            gap: .5rem;
    }

    > .date {
        display: flex;
        gap: 1rem;
        align-items: flex-end;
    }

    .price {
        border-radius: 0.625rem;
        display: flex;
        align-items: center;
        gap: .5rem;
        padding-left: 1rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    .add {
        width: max-content;
        border: none;
        height: 3.5rem;
        padding: 0 1rem;
        cursor: pointer;
        border: none;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: .5rem;

    }   
`
