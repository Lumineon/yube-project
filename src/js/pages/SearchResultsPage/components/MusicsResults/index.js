import React, { useState } from 'react';
import Modal from 'react-modal';
import PlaylistNames from '../../../../containers/PlaylistNames';

import * as S from './styled';

const MusicsResults = (props) => {
  const results = props.data;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trackId, setTrackId] = useState('');

  function setModalOpen(id) {
    setModalIsOpen(true);
    setTrackId(id);
  }

  function setModalClose() {
    setModalIsOpen(false);
  }

  return (
    <S.MusicsResultsWrapper>
      <S.MusicsTitle>Músicas</S.MusicsTitle>
      {results.tracks.items.length !== 0 ?
        results.tracks.items.map(({ id, artists, name, album, external_urls }) => (
          <S.Musics key={id}>
            <S.MusicsLink href={external_urls.spotify} target="_blank" rel="noreferrer">
              <S.AlbumCover src={album.images[0].url} alt="Capa do album" />
              <S.TextWrapper>
                <span className="music_name">{name}</span>
              {artists.map(({ name }, i) => (
                <S.MusicArtists key={i}>
                  {name}{artists.length > 0 && i === artists.length - 1 ? '' : ','}
                </S.MusicArtists>
              ))}
              </S.TextWrapper>
            </S.MusicsLink>

            <S.AddTrack onClick={() => setModalOpen(id)}>+</S.AddTrack>

            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
              <S.ModalClose onClick={setModalClose}>x</S.ModalClose>
              <PlaylistNames uri={trackId} setModalClose={setModalClose}/>
            </Modal>
          </S.Musics>
        )): <S.MusicsTitle>Música não encontrada :(</S.MusicsTitle>}
    </S.MusicsResultsWrapper>
  );
};
export default MusicsResults;