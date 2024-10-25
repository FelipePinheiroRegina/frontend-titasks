import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    ::-webkit-scrollbar {
        width: 1px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.GREEN};
    }
`

export const Content = styled.div`
    max-width: 120rem;
    margin-top: 3.2rem;
    margin-inline: auto;

    display: grid;
    grid-template-columns: 256px 1fr;
    gap: 3.2rem;
    align-items: flex-start;
`

export const Filters = styled.aside`
    border-radius: .8rem;
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .container-input {
        height: 5rem;
    }
`

export const Section = styled.section`
    overflow-y: scroll;
    height: calc(100vh - 150px);

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`