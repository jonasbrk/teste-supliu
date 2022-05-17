import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IAlbum } from '../../typings/response';

import { Song } from '../Song';

import { Small } from '../../styles/typogaphy';
import { AlbumContainer, AlbumHeader, AlbumHeaderLabel, AlbumMain, SongHeader, SongInfoContainer } from './Album.styles';

interface AlbumProps {
  data: IAlbum
  header?: boolean
}

export const Album: React.FC<AlbumProps> = (props) => {
  const { data, header = true } = props;
  const { name, year, tracks, id } = data;

  const navigate = useNavigate();

  return (
    <AlbumContainer onClick={()=> navigate('/album/' + id)}>
      {header && 
      <AlbumHeader>
        <AlbumHeaderLabel>
          <Small fontWeight='bold'>
            {`Álbum: ${name}, ${year}`}
          </Small>
        </AlbumHeaderLabel>
      </AlbumHeader>
      }
      <AlbumMain>
        <SongHeader>
          <SongInfoContainer column='index'>
            <Small fontWeight='regular'>
              Nº
            </Small> 
          </SongInfoContainer>
          <SongInfoContainer column='first'>
            <Small fontWeight='regular'>
              Faixa
            </Small> 
          </SongInfoContainer>
          <SongInfoContainer column='last'>
            <Small fontWeight='regular'>
              Duração
            </Small>
          </SongInfoContainer>
        </SongHeader>
        {tracks && 
        tracks.sort((a, b) => a.number > b.number ? 1 : -1)
          .map((e)=> 
            <Song key={e.id} 
              data={{...e, album: props.data}}
              disable={header} />)}
      </AlbumMain>
    </AlbumContainer>
  );
};
