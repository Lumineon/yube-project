import styled from 'styled-components';
import { rem } from 'polished';

export const FooterWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.blue};
  height: ${rem(60)};
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 ${rem(30)};

  span {
    color: white;
  }
`;

export const FooterItem = styled.a`
  color: white;
  text-decoration: none;
`;