import styled from 'styled-components';
import { rem } from 'polished';

export const SearchPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  padding: ${rem(20)};
`;

export const SearchPageText = styled.div`
  margin-bottom: ${rem(25)};
 
  p {
   color: white;
   font-size: ${rem(26)};
   font-weight: 700;
   text-align: center;
  }
`;

export const SearchFormWrapper = styled.div`
  width: 100%;
  text-align: center;

  button {
    color: white;
    letter-spacing: ${rem(0.5)};
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 5px;
    padding: ${rem(10)};
    font-size: ${rem(13)};
  }
`;

export const SearchFormContent = styled.div``;

export const SearchInput = styled.input`
  padding: ${rem(15)};
  margin-bottom: ${rem(25)};
  width: 80%;
`;
