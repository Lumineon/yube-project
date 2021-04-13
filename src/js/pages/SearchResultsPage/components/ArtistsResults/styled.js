import styled from 'styled-components';
import { rem } from 'polished';

export const ArtistsResultsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ArtistsTitle = styled.h2`
  margin-top: ${rem(40)};
`;

export const Artists = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: ${rem(20)};
`;

export const ArtistsName = styled.a`
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