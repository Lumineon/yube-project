import styled from 'styled-components';
import { rem } from 'polished';

export const SearchResultsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const SearchResultsTitle = styled.h2`
  margin-top: ${rem(40)};
`;

export const SearchResultsArtist = styled.span`
    color: black;
    font-size: ${rem(12)};
`;

export const SearchResults = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: ${rem(20)};

  &:last-child {
    padding-bottom: ${rem(70)};
  }

`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${rem(20)};

  .music_name{
    margin-bottom: ${rem(5)};
  }
`;

export const AlbumCover = styled.img`
  width: ${rem(130)};
  height: ${rem(130)};
`;

export const SearchResultsName = styled.a`
  display: flex;
  align-items: center;
  font-size: ${rem(14)};
  letter-spacing: ${rem(1)};
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

export const ArtistImage = styled.div`
  margin-right: ${rem(20)};

  img {
    width: ${rem(130)};
    height: ${rem(130)};
    border-radius: 100%;
  }
`;

export const ArtistDefault = styled.div`
  background-color: grey;
  width: ${rem(130)};
  height: ${rem(130)};
  border-radius: 100%;
`;

export const AddTrack = styled.button`
  position: absolute;
  right: 0;
  font-size: ${rem(35)};
`;