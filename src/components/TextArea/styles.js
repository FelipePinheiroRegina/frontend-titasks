import styled from "styled-components"

export const Container = styled.textarea`
    width: 100%;
    background-color: ${({ theme })  => theme.COLORS.BACKGROUND_900};
    border: none;
    resize: none;
    height: 9.375rem;
    border-radius: 0.625rem;
    padding: 0.625rem;
    color: ${({ theme })  => theme.COLORS.WHITE};

    outline: none;

    &:placeholder {
        color: ${({ theme })  => theme.COLORS.GRAY};
    }
`