import styled from "styled-components"

export const Container = styled.div`
    display: absolute;
    padding-left: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 1rem;

    ul {
        display: flex;
        flex-direction: column;
        gap: .8rem;
        list-style: none;

        li {
            font-size: 1rem;
            cursor: pointer;
        }
    }
`