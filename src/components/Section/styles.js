import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 1.25rem;
        font-weight: normal;

        padding-bottom: 0.5rem;
        margin-bottom: 0.5rem;

        border-bottom: 0.1rem dashed ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    > p {
        margin-bottom: .937rem;
    }

`