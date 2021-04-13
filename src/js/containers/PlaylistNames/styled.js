import styled from 'styled-components';
import { rem } from 'polished';

export const PlaylistNamesWrapper = styled.div``;
export const PlaylistItem = styled.div`
  margin-bottom: ${rem(10)};
`;
export const PlaylistName = styled.button`
  border-bottom: ${rem(2)} solid ${({ theme }) => theme.colors.orange};
  text-align: left;
  padding-bottom: ${rem(2)};
`;
export const PlaylistNamesTitle = styled.h3`
  margin-bottom: ${rem(20)};
`;
