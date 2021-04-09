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
`;

export const SearchFormContent = styled.div``;

export const SearchInput = styled.input`
  padding: ${rem(10)};
  margin-bottom: ${rem(12)};
`;
