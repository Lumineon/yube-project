import React from 'react';

import Login from '../../../Login/index';

import * as S from './styled';

const Menu = ({open}) => {
  return (
    <S.MenuContainer open={open}>
        <Login />
        <button>
          <span role="img" aria-label="Termos e condições"></span>
          Termos e condições
        </button>
    </S.MenuContainer>
  )
}

export default Menu;