import React, { useContext, useState } from 'react';

import { TrashIcon } from '../../assets/svg';

import { Api } from '../../services/api';

import { useTimeFormater } from '../../utils/useTimeFormater';
import { AlbumsContext } from '../../utils/context';

import { ITrack } from '../../typings/response';

import { Warning } from '../Warning';

import { Colors } from '../../styles/colors';
import { Small } from '../../styles/typogaphy';
import { 
  SongContainer, 
  SongColumn,
  SongDeleteButton, 
} from './Song.styles';

interface SongProps {
data: ITrack
disable: boolean
}

export const Song: React.FC<SongProps> = (props) => {
  const { data, disable } = props;
  const {id, album, duration, number, title } = data;
  const {albumsData, setAlbumsData} = useContext(AlbumsContext);
  const [warning, setWarning] = useState<boolean>(false);
  const [ loading, setLoading] = useState<boolean>(false);

  const handleDelete = async (dataProps : ITrack, validate: boolean ) => {

    if(!validate){
      setWarning(true);
    }
    else{
      setLoading(true);
      try {
        const response = await Api('/track/' + dataProps.id,{
          method:'DELETE',
        });
        if(response.status == 200){   
          const newData = albumsData.filter((e) => e.id != album.id);
          const newAlbuns = [...newData, 
            {...album,
              tracks: album.tracks ?
                album.tracks.filter((e)=> e.id != id) : [],
            }];

          setAlbumsData(newAlbuns);

        }else{
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      } 
    }
  };

  return (
    <SongContainer>
      <Warning 
        data={{...data, type: 'track' , name: title}}
        isOpen={warning}
        onClose={()=> setWarning(false)}
        onValidate={()=> handleDelete(data, true)}
        loading={loading}
      ></Warning>
      <SongColumn column='index'>
        <Small fontWeight='regular'>
          {number}
        </Small>   
      </SongColumn>
      <SongColumn column='first'>
        <Small fontWeight='regular'>
          {title}
        </Small>      
      </SongColumn>
      {!disable &&
      <SongColumn column='delete'>
        <SongDeleteButton onClick={() => handleDelete(data, false)}>
          <TrashIcon fill={Colors.danger}/>
        </SongDeleteButton>
      </SongColumn>
      }
      <SongColumn column='last'>
        <Small fontWeight='regular'>
          {useTimeFormater(duration)}
        </Small>
      </SongColumn>
    </SongContainer>
  );
};
