import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    text-align: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 18px;
    color: ${({ theme, $isactive }) => $isactive? theme.COLORS.GREEN : theme.COLORS.WHITE};
    font-weight: ${({ $isactive }) => $isactive? `bold` : `400`};
`