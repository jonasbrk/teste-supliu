import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Small } from '../../styles/typogaphy';
import { IAlbum } from '../../typings/response';
import { Song } from '../Song';
import { AlbumContainer, AlbumHeader, AlbumHeaderLabel, AlbumMain, SongHeader, SongInfoContainer } from './Album.styles';

interface AlbumProps {
  data: IAlbum
  header?: boolean
}

export const Album: React.FC<AlbumProps> = (props) => {
  const { name, year, tracks, id } = props.data;
  const { header = true } = props;

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

        {tracks.map((e)=> <Song key={e.id} data={e} />)}
      </AlbumMain>

    </AlbumContainer>
  );
};
