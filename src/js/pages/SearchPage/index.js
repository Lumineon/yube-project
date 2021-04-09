import React, { useState } from 'react';

import * as S from './styled';

const SearchPage = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Por favor digite algo!');
    }
  };

  return (
    <S.SearchPageWrapper>
      <S.SearchPageText>
        <p>Procure um artista ou uma música que você goste :)</p>
      </S.SearchPageText>
      <S.SearchFormWrapper onSubmit={handleSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <S.SearchFormContent>
          <S.SearchInput
            type="search"
            name="searchTerm"
            value={searchTerm}
            placeholder="Buscar"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </S.SearchFormContent>
        <button type="submit">
          Buscar
        </button>
      </S.SearchFormWrapper>
    </S.SearchPageWrapper>
  );
};
export default SearchPage;