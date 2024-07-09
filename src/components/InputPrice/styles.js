import styled from "styled-components"

export const Container = styled.div`
    input {
       height: 3.5rem;
       background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
       color: ${({ theme }) => theme.COLORS.WHITE};
       border: none;
       width: 100%; 
       outline: none;
    }
`