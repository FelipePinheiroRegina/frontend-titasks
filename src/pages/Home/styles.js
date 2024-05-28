import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 350px;
    grid-template-rows: max-content auto max-content;
    justify-content: center;
    height: 100vh;


    > div:nth-child(1) {
        position: fixed;
    }

    > div:nth-child(3) {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
    }
`

export const Menu = styled.div`
    margin-top: 50px; 
    margin-bottom: 20px;
    
    font-weight: 400;

    > ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
    }
`

export const Content = styled.div`
    padding: 80px 20px;

    ::-webkit-scrollbar {
        width: 5px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    ::-webkit-scrollbar-thumb {
        width: 10px;
        background-color: ${({ theme }) => theme.COLORS.GREEN};
        border-radius: 8px;
    }

    > .scrollTop {
        position: fixed;
        bottom: 13%;
        right: 5%;

        border: none;
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        border-radius: 50%;
        color: ${({ theme }) => theme.COLORS.GREEN};  
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;

        svg {
            font-size: 24px;
        }
    }
`
