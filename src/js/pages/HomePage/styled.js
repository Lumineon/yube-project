import styled from 'styled-components';
import { rem } from 'polished';

export const HomePageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.orange};
  padding: ${rem(20)};
`;
export const HomePageSection = styled.div`
  margin: ${rem(30)} 0;

  &:first-child {
    margin-bottom: ${rem(45)};
  }

  p {
    font-size: ${rem(16)};
  }
`;

export const HomePageTitle = styled.h1`
  text-align: center;
  
`;

export const HomePageSubTitle = styled.h2`
  margin-bottom: ${rem(12)};
`;
