import styled from 'styled-components';
import { rem } from 'polished';

export const PlaylistPageWrapper = styled.div``;
export const PlaylistsWrapper = styled.div``;
export const PlaylistNotFound = styled.h2`
  text-align: center;
  font-weight: bold;
`;
export const PlaylistItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(15)};

  a {
    text-decoration: none;
    color: black;
  }

  &:last-child {
    padding-bottom: ${rem(80)};
  }
`;
export const PlaylistImageDefault = styled.div`
  width: ${rem(200)};
  height: ${rem(200)};
  background-color: grey;
`;
export const PlaylistImageWrapper = styled.div`
  img {
    width: ${rem(200)};
    height: ${rem(200)};
  }
`;
export const PlaylistPageTitle = styled.h2`
  margin: ${rem(20)};
  font-weight: 700;
`;
export const PlaylistName = styled.h3`
  font-weight: 700;
  margin-top: ${rem(5)};
`;
export const PlaylistTracks = styled.p`
`;
export const PlaylistCreateWrapper = styled.div`
  display: flex;
  margin: ${rem(30)} ${rem(15)};

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    font-size: ${rem(18)};
    text-transform: uppercase;
    padding: ${rem(15)};
    border: 1px solid;
    border-radius: ${rem(10)};
  }
`;
export const PlaylistTotalTracks = styled.div``;
