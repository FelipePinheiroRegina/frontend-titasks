import styled from "styled-components"

interface CustomProps {
    $modalIsOpen: boolean
}

export const Container = styled.div<CustomProps>`
    position: fixed;
    inset: 0;
    background-color: ${({ theme }) => theme.COLORS.BLACK_900};

    display: grid;
    grid-template-rows: max-content 1fr;
    
    .close {
        width: 80%;
        height: 10rem;
        display: flex;
        justify-content: end;
        align-items: center;
        svg {
            font-size: 3.2rem;
            cursor: pointer;
        }
    }
    

    .img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        object-fit: contain;
    }

    display: ${({ $modalIsOpen }) => $modalIsOpen ? 'block' : 'none'};
`