import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 1.25rem 1.875rem;
    border-radius: 0.5rem;

    margin: 0.5rem 0 1.5rem;
    padding-bottom: 1.25rem;

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        margin-bottom: 0.6rem;

        .count {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.COLORS.GREEN};
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }

        span {
            display: flex;
            align-items: center; 
            gap: 0.5rem;

            img {
                height: 1rem;
                border-radius: 50%;
            }

            svg {
                color: ${({ theme }) => theme.COLORS.GREEN};
                
            }
        }
    }

    .print {
        position: relative;
        cursor: pointer;
        border: none;
        background-color: transparent;

        img {
            height: 12.5rem;
            filter: brightness(0.2);
            
        }

        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
    }
`