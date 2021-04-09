import React from 'react';
import * as S from './styled';

const Button = ({ open, setOpen }) => {
  return (
    <S.ButtonContainer open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </S.ButtonContainer>
  )
}

export default Button;