import React from 'react';
import ArtistsResults from './components/ArtistsResults';
import MusicsResults from './components/MusicsResults';

import * as S from './styled';

const SearchResultsPage = (props) => {
  const results = props.data;

  return (
    <S.SearchResultsWrapper>
      <ArtistsResults data={results}/>
      <MusicsResults data={results} />
    </S.SearchResultsWrapper>
  );
};
export default SearchResultsPage;