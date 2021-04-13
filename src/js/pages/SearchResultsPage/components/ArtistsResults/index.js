import React from 'react';

import * as S from './styled';

const ArtistsResults = (props) => {
  const results = props.data;

  return (
    <S.ArtistsResultsWrapper>
      <S.ArtistsTitle>Artistas</S.ArtistsTitle>
      {results.artists.items.length !== 0 ?
        results.artists.items.map(({ id, name, images, external_urls }) => (
          <S.Artists key={id}>
            <S.ArtistsName href={external_urls.spotify} target="_blank" rel="noreferrer">
              <S.ArtistImage>
                {images.length ? <img src={images[2].url} alt="Artist" /> : 
                <S.ArtistDefault></S.ArtistDefault>}
              </S.ArtistImage>
                {name}
            </S.ArtistsName>
          </S.Artists>
        )): <S.ArtistsTitle>Artista não encontrado :(</S.ArtistsTitle>}
    </S.ArtistsResultsWrapper>
  );
};
export default ArtistsResults;