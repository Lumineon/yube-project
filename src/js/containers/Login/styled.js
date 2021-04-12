import styled from 'styled-components';
import { rem } from 'polished';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: ${rem(25)};
    padding: 2rem 0;
    font-weight: bold;
    color: white;
    text-decoration: none;
    text-align: left;
  }
  
  button, a {
    font-size: ${rem(20)};
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    color: white;
    text-decoration: none;
    text-align: center;
  }
`;
