import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrashIcon } from '../../assets/svg';
import { Api } from '../../services/api';
import { Colors } from '../../styles/colors';
import { Small } from '../../styles/typogaphy';
import { ITrack } from '../../typings/response';
import { AlbumsContext } from '../../utils/context';
import { useTimeFormater } from '../../utils/useTimeFormater';
import { Warning } from '../Warning';
import { dataWarningProps } from '../Warning/Warning';
import { SongContainer, SongWrapper, SongDeleteButton } from './Song.styles';

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

  const navigate = useNavigate();
  return (
    <SongContainer>
      <Warning 
        data={{...data, type: 'track' , name: title}}
        isOpen={warning}
        onClose={()=> setWarning(false)}
        onValidate={()=> handleDelete(data, true)}
        loading={loading}
      ></Warning>
      <SongWrapper column='index'>
        <Small fontWeight='regular'>
          {number}
        </Small>   
      </SongWrapper>
      <SongWrapper column='first'>
        <Small fontWeight='regular'>
          {title}
        </Small>      
      </SongWrapper>
      {!disable &&
      <SongWrapper column='delete'>
        <SongDeleteButton onClick={() => handleDelete(data, false)}>
          <TrashIcon fill={Colors.danger}/>
        </SongDeleteButton>
      </SongWrapper>
      }
      <SongWrapper column='last'>
        <Small fontWeight='regular'>
          {useTimeFormater(duration)}
        </Small>
      </SongWrapper>
    </SongContainer>
  );
};
