import React, {useState, useEffect} from 'react';
import { getUser } from '../../utils/getUserInfo';

import * as S from './styled';

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUser();
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <S.HomePageWrapper>
      <S.HomePageSection>
        <S.HomePageTitle>
          Você traz a paixão. <br/>
          Nós trazemos a música.
        </S.HomePageTitle>
      </S.HomePageSection>

      <S.HomePageSection>
        <S.HomePageSubTitle>
          Um mundo de músicas na palma de sua mão.
        </S.HomePageSubTitle>
        <p>Encontre músicas que você ama e também suas preferidas do passado, no meio de mais de 73 milhões de faixas.</p>
      </S.HomePageSection>

      <S.HomePageSection>
        <S.HomePageSubTitle>
          Crie a sua própria coleção.
        </S.HomePageSubTitle>
        <p>Crie playlists a partir de milhões de faixas, e leve todas com você onde quer que vá.</p>
      </S.HomePageSection>
      {user ? 
      <div>
        {user.display_name} 
      </div>: <div>false</div>}
    </S.HomePageWrapper>
  );
}

export default HomePage;
