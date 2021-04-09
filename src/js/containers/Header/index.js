import React, { useState } from 'react';

import Menu from './components/Menu/index';
import Button from './components/Button/index';

import * as S from './styled';

const Header = () => {
  const [open, setOpen] = useState(false);
  return(
    <S.HeaderWrapper>
      <S.HeaderLeft>
        <a href="/">Yube Player</a>
      </S.HeaderLeft>

      <S.HeaderRight>
        <Menu open={open} setOpen={setOpen} />
        <Button open={open} setOpen={setOpen} />
      </S.HeaderRight>

    </S.HeaderWrapper>
  );
};

export default Header;