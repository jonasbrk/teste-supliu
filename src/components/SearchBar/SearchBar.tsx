import React, { useEffect, useState } from 'react';
import { Small } from '../../styles/typogaphy';
import { Button } from '../Button';
import { SearchInputContainer, SearchBarContainer, SearchInput, SearchButtonContainer } from './SearchBar.styles';

interface SearchBarProps {
    onClick: (query: string ) => void;
    loading?: boolean
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [query, setQuery] = useState('');
  const {onClick} = props;

  useEffect(()=>{  if(!query) onClick(query);} ,[query]);
  return (
    <SearchBarContainer>
      <SearchInputContainer>
        <Small fontWeight='regular' marginLeft={10}>Digite uma palavra chave</Small>
        <SearchInput placeholder='Ex. Minas Gerais' onChange={(e) => setQuery(e.target.value)}/>
      </SearchInputContainer>
      <SearchButtonContainer>
        <Button buttonType='primary' onClick={()=> onClick(query)}>
            Procurar
        </Button>
      </SearchButtonContainer>
    </SearchBarContainer>
  );
};