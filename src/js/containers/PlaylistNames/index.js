import React, { useState, useEffect } from 'react';
import { getPlaylists } from '../../utils/getPlaylists';
import { addPlaylistTracks } from '../../utils/addPlaylistTracks';

import * as S from './styled'

const PlaylistNames = (props) => {
  const [playlists, setPlaylists] = useState('');
  const uris = props.uri;
  const setModalClose = props.setModalClose;

  const handleTrack = async (id, uris) => {
    await addPlaylistTracks(id, uris);
    setModalClose();
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylists();
      setPlaylists(data);
    };
    fetchData();
  }, []);
  

  return (
    <S.PlaylistNamesWrapper>
      <>
      <S.PlaylistNamesTitle>Adicionar à playlist:</S.PlaylistNamesTitle>
      {playlists &&
        playlists.items.map(({ id, name }) => (
          <S.PlaylistItem key={id}>
            <S.PlaylistName onClick={() => handleTrack(id, uris)} to={id}>{name}</S.PlaylistName>
          </S.PlaylistItem>
      ))}
      </>
    </S.PlaylistNamesWrapper>
  );
}

export default PlaylistNames;
