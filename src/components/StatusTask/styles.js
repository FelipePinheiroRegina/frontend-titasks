import styled from "styled-components"

export const Container = styled.span`
    svg {
        color: ${({ theme, $color }) => $color === 0 ? theme.COLORS.YELLOW : $color === 1 ? theme.COLORS.GREEN : 'none'};
        font-size: 24px;
    }

    sup {
        margin-left: 6px;
    }
`