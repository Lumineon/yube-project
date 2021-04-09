import styled from 'styled-components';
import { rem } from 'polished';

export const FooterWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.blue};
  height: ${rem(60)};
  bottom: 0;
  position: absolute;
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