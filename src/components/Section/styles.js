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
    
    h1 {
        font-size: 1.5rem;
        word-break: break-word;
        white-space: normal; 
        overflow-wrap: break-word; 
    }

    > p {
        margin-bottom: .937rem;
        line-height: 24px;
        letter-spacing: 1px;
    }
`