import styled from 'styled-components';
import { rem } from 'polished';

export const CreatePlaylistWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.orange};
  padding: ${rem(20)};
`;

export const CreatePlaylistForm = styled.form`
  margin-top: ${rem(35)};
`;

export const CreatePlaylistButton = styled.button`
  color: white;
  font-weight: 700;
  font-size: ${rem(18)};
  text-transform: uppercase;
  padding: ${rem(15)};
  border: 1px solid;
  border-radius: ${rem(10)};
  margin-top: ${rem(15)};
  width: 50%;
`;

export const CreatePlaylistButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CreatePlaylistItem = styled.div`
  margin: ${rem(15)} 0;
  display: flex;
  flex-direction: column;

  label {
    font-size:${rem(18)};
    margin-bottom: ${rem(10)};
    font-weight: 700;
  }

  input {
    font-size:${rem(16)};
    padding: ${rem(8)};
  }

  textarea {
    padding: ${rem(15)} ${rem(8)} ${rem(25)} ${rem(8)};
  }
`;