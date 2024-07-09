import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  

  display: grid;
  grid-template-columns: 25rem;
  justify-content: center;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: grid;
      grid-template-columns: 15rem 1fr;
      grid-template-rows: auto 1fr;
      grid-template-areas:
      "logo headertop"
      "bar  content";
  }
`;

export const Logo = styled.div`
  display: none;
  grid-area: logo;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GREEN};
  
  h1 {
    font-size: 1.5rem; 
  }
  

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
  }
`

export const Bar = styled.div`
  display: none;
  grid-area: bar;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  > button {
      cursor: pointer;
      background-color: ${({ theme }) => theme.COLORS.GREEN};
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.125rem;
      font-size: 1rem;
      gap: .5rem;
       
      svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        font-size: 1.2rem;
      }
  }
  

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    align-items: flex-end;
    justify-content: center; 
    
    }
`

export const Content = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GREEN};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 1rem;  
    padding: 0 3rem;
  }

  ::-webkit-scrollbar {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND}; 
        width: 5px;   
  }

  ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.GREEN};
      border-radius: 8px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      grid-area: content;
  
  }
`;

export const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 10px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const ContainerSchedule = styled.div`
  width: 100%;
  height: 20rem;
  padding: 1rem 0;
  grid-area: content;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 12px; 
              
`