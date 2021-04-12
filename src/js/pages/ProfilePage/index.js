import React, {useEffect, useState} from 'react';
import { getUser } from '../../utils/getUserInfo'

import * as S from './styled';

const ProfilePage = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUser();
      setUser(data);
      console.log(data)
    };
    fetchData();
  }, []);

  return (
    <S.ProfilePageWrapper>
      <S.ProfilePageTitle>Visão geral da conta</S.ProfilePageTitle>
      {user &&
        <>
          <S.ProfilePageSubTitle>Perfil</S.ProfilePageSubTitle>
          <S.ProfileContent>
            <S.ProfilePhoto>
              {user.images.length ? (
                <img src={user.images[0].url} alt="Imagem do Usuário" />
              ) : (
                <div>
                  <S.ProfileDefaultImage></S.ProfileDefaultImage>
                </div>
              )}
              <S.Username>
                Usuário
                <span>{user.display_name}</span>
              </S.Username>
            </S.ProfilePhoto>
            <S.ProfileItem>
              <span>E-mail: </span>{user.email}
            </S.ProfileItem>
            <S.ProfileItem>
            <span>Seguidores:</span> {user.followers.total}
            </S.ProfileItem>
          </S.ProfileContent>
        </>
      }
    </S.ProfilePageWrapper>
  );
}

export default ProfilePage;
