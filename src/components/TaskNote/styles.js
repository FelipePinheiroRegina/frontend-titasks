import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding: 15px;
    margin: 15px 0px;

    border-radius: 10px;

    > h1 {
        font-size: 24px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};
        line-height: 24px;
    }

    > div {
        display: flex;
        justify-content: space-between;

        @media screen and (min-width: 768px){
            justify-content: flex-start;
            gap: 16px;
        }

        div {
            padding: 5px;
            border-radius: 10px;
            font-size: 14px;
            box-shadow: 1px 1px 2px  1px black
        }

        .created {
            background-color: ${({ theme }) => theme.COLORS.GREEN};
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            font-weight: bold;
        }

        .deadline {
            background-color: ${({ theme }) => theme.COLORS.RED};
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            font-weight: bold;
        }

        .status {
            background-color: ${({ theme }) => theme.COLORS.GRAY};
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: bold;
        }
    }
`