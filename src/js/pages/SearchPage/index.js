import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { token } from '../../utils/getAccessToken';
import SearchResultsPage from '../SearchResultsPage/';

import * as S from './styled';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState('');
  const [url, setUrl] = useState('')
  const [errorMsg, setErrorMsg] = useState('');
  
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    if (search === '') {
      return
    } else {
      const fetchData = async () => {
        const { data } = await axios.get(
          url, { headers });
        setResults(data);
      }
      fetchData();
    }
  }, [url]) // eslint-disable-line

  
  const handleInputChange = (e) => {
    const search = e.target.value;
    setSearch(search);
  };
  
  const handleSearch = () => {
    if (search.trim() !== '') {
      setUrl(`https://api.spotify.com/v1/search?q=${search}&type=track%2Cartist&limit=10`);
      setErrorMsg('');
    } else {
      setErrorMsg('Por favor digite algo!');
    }
  };

  return (
    <S.SearchPageWrapper>
      <S.SearchPageText>
        <p>Procure um artista ou uma música que você goste :)</p>
      </S.SearchPageText>
      <S.SearchFormWrapper>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <S.SearchFormContent>
          <S.SearchInput
            type="search"
            name="searchTerm"
            value={search}
            placeholder="Buscar"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </S.SearchFormContent>
        <button type="submit" onClick={() => handleSearch()}>
          Buscar
        </button>
      </S.SearchFormWrapper>
      {results && <SearchResultsPage data={results}/>}
    </S.SearchPageWrapper>
  );
};
export default SearchPage;