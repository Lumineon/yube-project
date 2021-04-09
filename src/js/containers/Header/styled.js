import styled from 'styled-components';
import { rem } from 'polished';

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: ${rem(20)} ${rem(24)};
`;

export const HeaderLeft = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-size: ${rem(20)}
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;