import React, { useState } from 'react';
import Modal from 'react-modal';
import PlaylistNames from '../../containers/PlaylistNames';

import * as S from './styled';

const SearchPage = (data) => {
  const results = data.data;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trackId, setTrackId] = useState('');

  const setModalOpen = (id) => {
    setModalIsOpen(true);
    setTrackId(id);
  }

  const setModalClose = () => {
    setModalIsOpen(false);
  }

  return (
    <S.SearchResultsWrapper>
      <S.SearchResultsTitle>Artistas</S.SearchResultsTitle>

      {results.artists.items.length !== 0 ?
        results.artists.items.map(({ id, name, images, external_urls }) => (
          <S.SearchResults key={id}>
            <S.SearchResultsName href={external_urls.spotify} target="_blank">
              <S.ArtistImage>
                {images.length ? <img src={images[2].url} alt="Artist" /> : 
                <S.ArtistDefault></S.ArtistDefault>}
              </S.ArtistImage>
                {name}
            </S.SearchResultsName>
          </S.SearchResults>
        )): <S.SearchResultsTitle>Artista não encontrado :(</S.SearchResultsTitle>}


      <S.SearchResultsTitle>Músicas</S.SearchResultsTitle>

      {results.tracks.items.length !== 0 ?
        results.tracks.items.map(({ id, artists, name, album, external_urls }) => (
          <S.SearchResults key={id}>
            <S.SearchResultsName href={external_urls.spotify} target="_blank">
              <S.AlbumCover src={album.images[0].url} alt="Capa do album" />
              <S.TextWrapper>
                <span className="music_name">{name}</span>
              {artists.map(({ name }, i) => (
                <S.SearchResultsArtist key={i}>
                  {name}{artists.length > 0 && i === artists.length - 1 ? '' : ','}
                </S.SearchResultsArtist>
              ))}
              </S.TextWrapper>
            </S.SearchResultsName>
            <S.AddTrack onClick={() => setModalOpen(id)}>+</S.AddTrack>
            <Modal isOpen={modalIsOpen}>
              <button onClick={setModalClose}>x</button>
              <PlaylistNames uri={trackId}/>
            </Modal>
          </S.SearchResults>
        )): <S.SearchResultsTitle>Artista não encontrado :(</S.SearchResultsTitle>}
    </S.SearchResultsWrapper>
  );
};
export default SearchPage;