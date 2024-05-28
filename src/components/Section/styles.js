import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: normal;

        padding-bottom: 8px;
        margin-bottom: 8px;

        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    > p {
        margin-bottom: 15px;
    }

    @media screen and (min-width: 900px) {
        > h2 {
            font-size: 24px;
        }

        > p {
            font-size: 22px;
        }
    }
`