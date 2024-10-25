import styled from "styled-components"
import theme from '../../styles/theme'
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem;
    font-size: 2.4rem;
    gap: 1.6rem;
    color: ${theme.COLORS.GRAY_300};

    svg {
        font-size: 4.8rem;
    }
`