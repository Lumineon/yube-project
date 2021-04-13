import React, { useState, useEffect } from 'react';
import { getUser } from '../../utils/getUserInfo';
import { logout } from '../../utils/getAccessToken';

import * as S from './styled'

const Login = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUser();
      setUser(data);
    };
    fetchData();
  }, []);

  const REACT_APP_REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL || 'http://localhost:3000/';

  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
  } = process.env;

  const SCOPE =
      'user-read-private user-read-email user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private';

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <S.LoginWrapper>
      {user ?
        <>
          <p className="welcome">Bem vindo(a) <span>{user.display_name}</span> </p>
          <a href="/profile">
              Ver perfil
          </a>
          <button onClick={logout}>Sair</button>
        </> : 
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      }
    </S.LoginWrapper>
  );
}

export default Login;
