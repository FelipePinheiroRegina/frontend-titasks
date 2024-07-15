import styled from "styled-components"
import { FaCircle } from "react-icons/fa";

export const Container = styled.button`
    border: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    opacity: ${({ $isTrue }) => $isTrue ? '0.5': 'transparent'};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;

    .title-status {
        display: flex;
        justify-content: space-between;
        width: 100%;
        
        h1 {
            font-size: 1rem;
        } 

        .date {
            display:  flex;
            flex-direction: column;
            place-items: flex-end;
            gap: 0.5rem;
           

            span {
                display: flex;
                gap: 0.5rem;
            }

            div {
                display: flex;
                place-items: flex-end;
                flex-direction: column;
                gap: 0.5rem;
                text-align: right;
            }
        }
    }
 
    strong {
        display: flex;
        font-size: 1rem;
        gap: 0.5rem;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        img {
            border-radius: 50%;
            width: 1rem;
            height: 1rem;
        }
    }

    > span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;

        svg {
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
    }

    .count-answers {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
    }

    .answer-container {
        display: flex;
        flex-direction: row;
        
        flex-wrap: wrap; 
        margin-left: 10px;
        img {
            margin-left: -0.62rem;
            width: 1rem;
            border-radius: 50%;
        }      
    }

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
`

const getStatusColor = (status) => {
    switch (status) {
      case 'Fazer':
        return '#FF859B'
      case 'Fazendo':
        return '#fefe00'
      case 'Feito':
        return `#5AE4A8`
    }
}

export const StatusCircle = styled(FaCircle)`
    color: ${({ status }) => getStatusColor(status)};
`;
