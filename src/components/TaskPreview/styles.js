import styled from "styled-components"
import { FaCircle } from "react-icons/fa";

export const Container = styled.button`
    border: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 8px;

    .title-status {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 14px;
        
        h1 {
            text-align: left;
            font-size: 22px;
        } 

        .date {
            display:  flex;
            flex-direction: column;
            place-items: flex-end;
            gap: 8px;
           

            span {
                display: flex;
                gap: 8px;
            }

            div {
                display: flex;
                place-items: flex-end;
                flex-direction: column;
                gap: 8px;
                text-align: right;
            }
        }
    }
 
    strong {
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        img {
            border-radius: 50%;
            width: 16px;
            height: 16px;
        }
    }

    > span {
        display: flex;
        align-items: center;
        gap: 8px;

        svg {
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
    }

    .count-answers {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .answer-container {
        display: flex;
        flex-direction: row;
        
        flex-wrap: wrap; 
        margin-left: 10px;
        img {
            margin-left: -10px;
            width: 24px;
            border-radius: 50%;
        }      
    }
    
    @media screen and (min-width: 900px) {
        font-size: 20px;
        

        .title-status {
            font-size: 20px;

            h1 {
                font-size: 28px;
            }
        }

        strong {
        
            img {
                width: 30px;
                height: 30px;
            }
        }

        > span {
            
            svg {
                font-size: 30px;
                color: ${({ theme }) => theme.COLORS.GREEN};
            }
        }

        .count-answers {
            svg {
                font-size: 30px;
            }
        }

        .answer-container {
            img {
                width: 30px;
            }
        }
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
