import React, { useContext, useEffect, useState } from 'react';
import { Album, SearchBar } from '../../components';
import { Loading } from '../../components/Loading';
import { Api } from '../../services/api';
import { IAlbum } from '../../typings/response';
import { AlbumsContext } from '../../utils/context';
import { HomeContainer, SearchResults } from './Home.styles';

export const Home = () => {

  const {albumsData} = useContext(AlbumsContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IAlbum[]>(albumsData);

  const handleSearch = async (querry: string) => {
    if(!querry){
      setData(albumsData);
    }else{
      try {
        const response = await Api('/album?keyword=' + querry,{
          method: 'GET',
        });
        if(response.status == 200) {
          setData(response.data.data);
          setLoading(false);

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
    if(albumsData.length) {
      setLoading(false);
      setData(albumsData);
    }
  }, [albumsData]);

  return (
    <>
      {loading ? <Loading/> :    
        <HomeContainer>
          <SearchBar onClick={handleSearch}/>
          <SearchResults>
            { data.map((e) => <Album key={e.id} data={e}/>) }
          </SearchResults>
        </HomeContainer>
      }
    </>
  );
};
