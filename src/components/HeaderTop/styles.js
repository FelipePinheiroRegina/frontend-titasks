import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    grid-area: 'header';
    width: 100%;
    height: 105px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    padding: 10px;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    place-items: center;
    justify-content: center;
    gap: 100px;
    z-index: 1;

    @media screen and (min-width: 900px){
        justify-content: space-between;
        padding: 0 100px;
    }
`

export const Avatar  = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
 
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 8px;

        p {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`
export const Logout = styled.div`
    svg {
        font-size: 30px;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        transition: transform ease 0.3s;
    }

    @media screen and (min-width: 900px){
        svg:hover {
            transform: scale(1.1);
        }
    }
`