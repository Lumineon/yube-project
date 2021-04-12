import React, { useState, useEffect } from 'react';

import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';
import { token } from '../../utils/getAccessToken'

import * as S from './styled';

const SearchPage = (props) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState('');
  const [url, setUrl] = useState('')
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios.get(
          url, { headers });
        setResults(data);
        console.log(data)
      }
      fetchData()
  }, [url])
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const search = e.target.value;
    setSearch(search);
  };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (search.trim() !== '') {
  //     setErrorMsg('');
  //     props.handleSearch(search);
  //   } else {
  //     setErrorMsg('Por favor digite algo!');
  //   }
  // };

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
        <button type="submit" onClick={() => setUrl(`https://api.spotify.com/v1/search?q=${search}&type=track%2Cartist`)}>
          Buscar
        </button>
      </S.SearchFormWrapper>
      <div>Artistas</div>
      {results.artists ?
        results.artists.items.map(({ id, name }) => (
          <div key={id}>
            <div>
              {name}
            </div>
          </div>
        )): <div>false</div>}
    </S.SearchPageWrapper>
  );
};
export default SearchPage;