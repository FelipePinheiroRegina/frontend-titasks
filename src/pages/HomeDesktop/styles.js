import styled from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto  64px;
    grid-template-areas: 
    "logo header"
    "menu search"
    "menu content"
    "newtask content"
    ;
`

export const Logo  = styled.div`
    grid-area: logo;
    
    color: ${({ theme }) => theme.COLORS.GREEN};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    place-items: center;
    justify-content: center; 

    > h1 {
          font-size: 24px;
    }
`

export const Search  = styled.div`
     grid-area: search;
     margin-top: 30px;

     padding: 0px 40px;
`

export const Menu  = styled.ul`
     grid-area: menu;
     padding-top: 64px;
     
     display: flex;
     flex-direction: column;
     gap: 24px;
     align-items: center;
     list-style-type: none;

     background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

     input {
          background-color: ${({ theme }) => theme.COLORS.WHITE};
          border: none;
          padding: 10px;
          border-radius: 8px;
          cursor: pointer;
          outline: none;
     }

     button {
          transition: transform ease .3s;
     }

     button:hover {
          transform: scale(1.2);
     }
`

export const Content  = styled.div`
     grid-area: content;

     overflow-y: auto;

     > h2 {
          color: ${({ theme }) => theme.COLORS.GRAY_100};
          font-weight: normal;
          font-size: 30px;
          
          border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
          padding-bottom: 10px;
     }

     padding: 0px 40px;
`

export const NewTask = styled(Link)`
     grid-area: newtask;
     background-color: ${({ theme }) => theme.COLORS.GREEN};
     color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     gap: 8px;
     cursor: pointer;
     font-weight: bold;
     font-size: 20px; 
     
     text-decoration: none;

     &:hover {
          filter: saturate(150%)
     }
`