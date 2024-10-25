import styled from "styled-components"

export const Container = styled.div`
    width: 80rem;
    margin-inline: auto;
    margin-bottom: 3.2rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 1.6rem;
    border-radius: .8rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    
    .container-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .image-name {
            display: flex;
            align-items: center;
            gap: .7rem;

            > img {
                height: 5.2rem;
            }

            > div {
                display: flex;
                flex-direction: column;
                gap: .3rem;
            }
        }
        

        > .details {
            display: flex;
            flex-direction: column;
            gap: .3rem;
            font-style: italic;    
            color: ${({ theme }) => theme.COLORS.GRAY_100}; 
        }
    } 

    .openImage {
        font-size: 2rem;

        &:hover {
            color: ${({ theme }) => theme.COLORS.GREEN};
            cursor: pointer;
        }
    }
`