import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;

    > img {
        height: 4.2rem;
        border-radius: 50%;
        object-fit: cover;
    }
`

export const AuthorInfo = styled.div`
    position: relative;
    .info {
        display: flex;
        gap: 1.6rem;
        align-items: center;

        div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            p {
                color: ${({ theme }) => theme.COLORS.GRAY_300};
            }

            small {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
        }
    }
   

    .modal {
        position: absolute;
        right: 10px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        padding: 1.6rem;
        width: max-content;
        margin-top: 2rem;
        visibility: hidden;
        opacity: 0;
        
        ul {
            list-style-type: none;

            display: flex;
            flex-direction: column;
            gap: 1.2rem;

            li {
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: .8rem;
                
                &:hover {
                    color: ${({ theme }) => theme.COLORS.GREEN};
                }
            }
        }

        transition: .3s;
    }

    &[data-modal="true"] {
        .modal {
            visibility: visible;
            opacity: 1;
        }
    }
`