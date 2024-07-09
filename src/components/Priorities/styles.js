import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
  
`;

export const ShortTask = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  height: 2.75rem;
  
  border: 0;
  padding: 0 1rem;
  border-radius: 0.43rem;
  font-size: 0.87rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .437rem;

  

  > svg {
    font-size: 1.12rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
    display: flex;
    align-items: center;
    gap: .437rem;
  }

  .scheduled {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border: none;
    display: flex;
    align-items: center;
    gap: .3rem;
    padding: .5rem;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 1rem; 

    
    
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 1rem;
    }
  }
`;

export const Tasks = styled.div`
  border: 1px dashed ${({ theme }) => theme.COLORS.RED_200};
  height: 9.625rem;
  border-radius: 0.43rem;
  margin-top: 1rem;
  
  display: flex;
  flex-wrap: wrap;
  
  gap: 1rem;
  padding: 1.5rem;
  align-items: center;
`;
