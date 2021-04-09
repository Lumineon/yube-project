import React from 'react';

import * as S from './styled';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <S.FooterItem href="/">
          Inicio
        </S.FooterItem>
        <S.FooterItem href="/search">
          Buscar
        </S.FooterItem>
        <S.FooterItem href="/playlists">
          Playlists
        </S.FooterItem>
      </S.FooterContent>
    </S.FooterWrapper>
  );

};

export default Footer;