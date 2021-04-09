import styled from 'styled-components';
import { rem } from 'polished';

export const MenuContainer = styled.nav`
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100vw)'};

  button {
    font-size: ${rem(20)};
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    transition: color 0.3s linear;
    color: white;
  }
`;