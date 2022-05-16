import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components';
import { Home , AlbumTemplate, NewAlbum} from './pages';
import { Api } from './services/api';
import { GlobalStyles } from './styles/globalStyles';
import { IAlbum } from './typings/response';
import { AlbumsContext } from './utils/context';

const App = () => {
  const [albumsData, setAlbumsData] = useState<IAlbum[]>([
  ]);

  useEffect( () => {

    const fetchData = async () => {
      try {
        const response = await Api('/album');

        if(response.status == 200) {

          setAlbumsData(response.data.data);

        }else{

          console.log(response);
    
        }
      } catch (error) {

        console.log(error);
  
      }
    };

    fetchData();
  },[]);


  return (
    <>
      <GlobalStyles/>
      <AlbumsContext.Provider value={{albumsData, setAlbumsData}}>
        <Layout>
          <Route path='/' element={<Home/>} /> 
          <Route path='/album/:id' element={<AlbumTemplate/>} /> 
          <Route path='/new' element={<NewAlbum/>} /> 
        </Layout>
      </AlbumsContext.Provider>
  
    </>
  );
};

export default App;