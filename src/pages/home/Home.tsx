import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AlbumsContext } from '../../utils/context';

import { Api } from '../../services/api';

import { IAlbum } from '../../typings/response';

import { Album, Button, SearchBar } from '../../components';
import { Loading } from '../../components/Loading';

import { AlbumAddContainer, HomeContainer, SearchResults } from './Home.styles';

export const Home = () => {

  const {albumsData} = useContext(AlbumsContext);
  const [data, setData] = useState<IAlbum[]>(albumsData);
  const [loading, setLoading] = useState<boolean>(true);
  const [searching, setSearching] = useState<boolean>(false);

  const handleSearch = async (querry: string) => {
    if(!querry){
      setData(albumsData);
    }else{
      setSearching(true);
      try {
        const response = await Api('/album?keyword=' + querry,{
          method: 'GET',
        });
        if(response.status == 200) {
          setData(response.data.data);
          setLoading(false);
          setSearching(false);
          console.log('Request feito com sucesso');   
        }else {
          console.log('Algo deu errado');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }; 

  useEffect(()=> {
    if(albumsData) {
      setLoading(false);
      setData(albumsData);
    }
  }, [albumsData]);

  const navigation = useNavigate();

  return (
    <>
      {loading ? <Loading/> :    
        <HomeContainer>
          <SearchBar loading={searching} onClick={handleSearch}/>
          <SearchResults>
            { data.sort((a, b) => a.year > b.year ? 1 : -1).map((e) => <Album key={e.id} data={e}/>) }
          </SearchResults>
          <AlbumAddContainer>
            <Button buttonType='primary' onClick={()=>navigation('/new')}>
              Novo Álbum
            </Button>
          </AlbumAddContainer>
        </HomeContainer>
      }
    </>
  );
};
