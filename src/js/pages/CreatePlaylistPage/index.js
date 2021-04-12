import React, {useState, useEffect} from 'react';
import { getUser } from '../../utils/getUserInfo';
import { createPlaylist } from '../../utils/getPlaylists'
import { Redirect } from 'react-router'

import * as S from './styled';

const HomePage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await getUser();
      setUserId(data.id);
    };
    fetchUserData();
  }, []);

  const storePlaylist = (name, data) => { 
    window.localStorage.setItem(`playlist ${name}`, JSON.stringify({name, description}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const { data } = await createPlaylist(userId, name, description);
      console.log(data);
      storePlaylist(name, data);
    };
    fetchData();
    setSubmitted(true);
  }

  if (submitted) {
    return <Redirect push to={{
      pathname: '/playlists',
    }}
    />
  }   

  return (
    <S.CreatePlaylistWrapper>
      <h2>Criar uma playlist</h2>

      <S.CreatePlaylistForm onSubmit={handleSubmit}>
        <S.CreatePlaylistItem>
          <label for="playlistName">Nome</label>
            <input
              type="text"
              name="playlistName"
              id="playlistName"
              value={name}
              placeholder="Nome da sua playlist"
              required
              onChange={e => setName(e.target.value)}
            />
        </S.CreatePlaylistItem>
        <S.CreatePlaylistItem>
          <label for="playlistDescription">Descrição</label>
            <textarea
              id="playlistDescription"
              placeholder="Digite algo aqui..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            >
            </textarea>
        </S.CreatePlaylistItem>
        <S.CreatePlaylistButtonWrapper>
          <S.CreatePlaylistButton
            type="submit"
            title="criar playlist"
          >
            Criar
          </S.CreatePlaylistButton>
        </S.CreatePlaylistButtonWrapper>
      </S.CreatePlaylistForm>
    </S.CreatePlaylistWrapper>
  );
}

export default HomePage;
