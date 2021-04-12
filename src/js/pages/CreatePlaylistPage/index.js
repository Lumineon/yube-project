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

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const { data } = await createPlaylist(userId, name, description);
      console.log(data);
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
    <S.HomePageWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome da playlist
            <input
              type="text"
              name="playlistName"
              value={name}
              placeholder="Nome da sua playlist"
              required
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição da playlist
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
            >
              Digite algo aqui...
            </textarea>
          </label>
        </div>
        <div>
          <button
            type="submit"
            title="criar playlist"
          >
            Criar playlist
          </button>
        </div>
      </form>
    </S.HomePageWrapper>
  );
}

export default HomePage;
