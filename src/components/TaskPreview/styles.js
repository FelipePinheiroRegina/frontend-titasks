import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    width: 100%;
    padding: 8px;
    box-shadow: 1px 2px 3px 2px black;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    cursor: pointer;

    display: flex;
    flex-direction: column;
    gap: 8px;

    .status {
        display: flex;
        align-items: center;
        gap: 6px;

        font-style: italic;
    }

    header h1 {
        word-break: break-word;
        white-space: normal; 
        overflow-wrap: break-word; 
        font-size: 1.2rem;
    }

    > .created-at {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;

        img {
            width: 24px;
            height: 24px;
        }
    }

    > .date-at {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;

        svg {
            font-size: 24px;
        }
    }

    > .count-answers {
        margin-top: 8px;
        border-top: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

        h3 {
            margin-bottom: 8px;
        }

        .container-svg-and-answer {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 1.2rem;

            svg {
                font-size: 24px;
            }
        }
    }

    > .answer-container {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;

        div {
            img {
                width: 24px;
            }

            svg {
                font-size: 24px;
            }
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        &:hover {
            transform: translateX(3px);
            transition: .2s ease-in-out;
        }
    }
`