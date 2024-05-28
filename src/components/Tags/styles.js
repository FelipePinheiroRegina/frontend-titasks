import styled from "styled-components"

export const Container = styled.span`
   color: ${({ theme, $created }) => $created? theme.COLORS.GREEN : theme.COLORS.WHITE};
   
`

