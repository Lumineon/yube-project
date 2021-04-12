import React, { useState, useEffect } from 'react';
import { getPlaylists } from '../../utils/getPlaylists';

import * as S from './styled'

const PlaylistsPage = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylists();
      setPlaylists(data);
      console.log(data)
    };
    fetchData();
  }, []);

  return (
    <S.PlaylistPageWrapper>
      <S.PlaylistPageTitle>Suas Playlists</S.PlaylistPageTitle>
      <S.PlaylistsWrapper>
        <S.PlaylistCreateWrapper>
          <a href="/create-playlist">Criar Playlist</a>
        </S.PlaylistCreateWrapper>
        <>
          {playlists ? (
            playlists.items.map(({ id, images, name, tracks, external_urls }, i) => (
              <S.PlaylistItem key={i}>
                <a href={external_urls.spotify}>
                <S.PlaylistImageWrapper to={id}>
                  {images.length ? (
                    <img src={images[0].url} alt="Capa da playlist" />
                  ) : (
                    <div>
                      <S.PlaylistImageDefault></S.PlaylistImageDefault>
                    </div>
                  )}
                </S.PlaylistImageWrapper>
                <S.PlaylistTotalTracks>
                  <S.PlaylistName to={id}>{name}</S.PlaylistName>
                  <S.PlaylistTracks>{tracks.total} Músicas</S.PlaylistTracks>
                </S.PlaylistTotalTracks>
                </a>
                </S.PlaylistItem>
            ))
          ) : (
            <S.PlaylistNotFound>Você ainda não tem playlists!</S.PlaylistNotFound>
          )}
        </>
      </S.PlaylistsWrapper>
    </S.PlaylistPageWrapper>
  );
};

export default PlaylistsPage;
