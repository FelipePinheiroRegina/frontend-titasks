import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    
    gap: 5px;
    
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
    color: ${({ theme, $isactive }) => $isactive? theme.COLORS.GREEN : theme.COLORS.WHITE};
    white-space: nowrap;
`