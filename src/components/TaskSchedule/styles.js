import styled, { css } from "styled-components"

export const Container = styled.button`
    width: 100%;
    border: none;
    display: flex;
    text-align: left;
    
    gap: 1rem;
    padding: 1.5rem 1rem;
    border-radius: 0.43rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    ${({ $done }) => $done && css`
        opacity: 0.3;
    `};

    > .check {
        svg {
            cursor: pointer;
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.GRAY_300};

            ${({ $done }) => $done && css`
            color: ${({ theme }) => theme.COLORS.GREEN};
            `};
        }
    }

    div {
        > svg {
            font-size: 1rem;
        }
    }

    &:hover {
        opacity: 0.8;
    }    
   
`

export const Details = styled.div`
    display: flex;  
    flex-direction: column;
    flex: 1;
    gap: .3rem;

    > span {
        font-size: 0.87rem;
    }

    > small {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
`;

export const DateAndPrice = styled.div` 
    display: flex;
    flex-direction: column;
    gap: .3rem;

    > span {
        font-size: 0.87rem;
        text-align: right;
        display: flex;
        align-items: center;
        gap: .5rem;

        svg {
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
    }
`