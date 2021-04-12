import React, { useState, useEffect } from 'react';
import { getPlaylists } from '../../utils/getPlaylists';
import { addPlaylistTracks } from '../../utils/addPlaylistTracks';

import * as S from './styled'

const PlaylistNames = (uri) => {
  const [playlists, setPlaylists] = useState('');
  const uris = uri.uri;

  const handleTrack = async (id, uris) => {
    await addPlaylistTracks(id, uris);
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylists();
      setPlaylists(data);
      console.log(data); //pq ta fazendo 8 request pai amado???
    };
    fetchData();
  }, []);

  return (
    <S.PlaylistNamesWrapper>
      <>
      Adicionar à playlist:
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
