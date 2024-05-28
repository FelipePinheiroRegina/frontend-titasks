import styled from "styled-components"

export const Container = styled.textarea`
    width: 100%;
    background-color: ${({ theme })  => theme.COLORS.BACKGROUND_900};
    border: none;
    resize: none;
    height: 150px;
    border-radius: 10px;
    padding: 10px;
    color: ${({ theme })  => theme.COLORS.WHITE};

    outline: none;

    &:placeholder {
        color: ${({ theme })  => theme.COLORS.GRAY};
    }
`