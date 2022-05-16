import React, { useState, useContext, useEffect } from 'react';
import { Description, Small } from '../../styles/typogaphy';
import { IAlbum } from '../../typings/response';
import { Modal , Button} from '../';
import { Colors } from '../../styles/colors';
import { NewSongContainer, SongFormButton, SongFormContainer, SongFormInput, SongFormItem, SongFormRow, SongFormRowButtons } from './NewSong.styles';
import { AlbumsContext } from '../../utils/context';
import { Api } from '../../services/api';

interface NewSongProps {
    isOpen: boolean
    onClose: () => void
    data: IAlbum
}

export const NewSong: React.FC<NewSongProps> = (props) => {
  const { data, isOpen, onClose} = props;
  const {albumsData, setAlbumsData} = useContext(AlbumsContext);
  const [titleInput, setTitleInput] = useState<string>('');
  const [durationInput, setDurationInput] = useState<string>('');
  const [numberInput, setNumberInput] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const errors = {
    existTitle: '*Este titulo já existe',
    existNumber: '*Este numero já existe',
    title: '*Titulo invalido',
    number: '*Numero invalido',
    duration: '*Duração invalida',
  };

  const titleCheck = data.tracks.find((e) => e.title == titleInput);
  const numberCheck = data.tracks.find((e) => String(e.number) == numberInput);


  useEffect(()=>{
    if(!isOpen){
      setTitleInput('');
      setDurationInput('');
      setNumberInput('');
    }
  },[isOpen]);

  const handleAdd = async () => {

    if(!titleInput 
      || !durationInput 
      || !numberInput 
      || titleCheck 
      || numberCheck){
      setError(true);
    }else{
      setLoading(true);
      try {
        const response = await Api('/track',{
          method:'POST',
          data:{
            album_id: data.id,
            number: numberInput,
            title: titleInput,
            duration: durationInput,

          },
        });
        if(response.status == 200){
          console.log(response);

          const newData = albumsData.filter((e) => e.id != data.id);
          const newAlbuns = [...newData, 
            {...data, tracks: data.tracks 
              ? [...data.tracks, response.data] 
              : [response.data],
            }];

          setAlbumsData(newAlbuns);
          setLoading(false);
          setError(false);
          onClose();

        }else{
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  
  return (
    <Modal isOpen={isOpen} onClose={()=> onClose()} title='Nova Faixa'>
      <NewSongContainer>
        <Description fontWeight='regular'>Para adicionar uma nova faixa preencha os dados abaixo.</Description>
        <SongFormContainer>
          <SongFormRow>
            <SongFormItem>
              <Small fontWeight='regular'>
                    Titulo:
              </Small>
              <SongFormInput onChange={(e)=> setTitleInput(e.target.value)}/>
              {((!titleInput && error) || titleCheck) && 
              <Small fontWeight='regular' color={Colors.danger}>
                {
                  titleCheck ? errors.existTitle : errors.title
                }
              </Small>
              }
            </SongFormItem>
          </SongFormRow>
        </SongFormContainer>
        <SongFormContainer>
          <SongFormRow>
            <SongFormItem>
              <Small fontWeight='regular' >
                    Duração: (em segs)
              </Small>
              <SongFormInput type='number' min={0} onChange={(e)=> setDurationInput(e.target.value)}/>
              {!durationInput && error && 
              <Small fontWeight='regular' color={Colors.danger}>
                {errors.duration}
              </Small>
              }
            </SongFormItem>
            <SongFormItem>
              <Small fontWeight='regular'>
                    Numero:
              </Small>
              <SongFormInput type='number' min={0} onChange={(e)=> setNumberInput(e.target.value)}/>
              {((!numberInput && error) || numberCheck)  && 
              <Small fontWeight='regular' color={Colors.danger}>
                {numberCheck ? errors.existNumber : errors.number}
              </Small>
              }
            </SongFormItem>
          </SongFormRow>
          <SongFormRowButtons>
            <SongFormButton>            
              <Button buttonType='half' onClick={()=> onClose()}>
              Cancelar
              </Button>
            </SongFormButton>
            <SongFormButton >            
              <Button buttonType='primary' loading={loading} onClick={()=> handleAdd()}>
              Adicionar
              </Button>
            </SongFormButton>
          </SongFormRowButtons>
        </SongFormContainer>
      </NewSongContainer>
    </Modal>
  );
};