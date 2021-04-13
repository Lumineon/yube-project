import React from 'react';

import Login from '../../../Login/index';

import * as S from './styled';

const Menu = ({open}) => {
  return (
    <S.MenuContainer open={open}>
        <Login />
    </S.MenuContainer>
  )
}

export default Menu;