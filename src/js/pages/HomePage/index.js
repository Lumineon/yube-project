import React from 'react';

import * as S from './styled';

const HomePage = () => {

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
    </S.HomePageWrapper>
  );
}

export default HomePage;
