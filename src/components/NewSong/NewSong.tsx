import React, { useState, useContext, useEffect } from 'react';
import { AlbumsContext } from '../../utils/context';

import { Api } from '../../services/api';
import { IAlbum } from '../../typings/response';

import { Modal , Button} from '../';

import { Colors } from '../../styles/colors';
import { Description, Small } from '../../styles/typogaphy';
import { 
  NewSongContainer,
  SongButtonContainer,
  SongFormContainer,
  SongFormInput,
  SongFormItem,
  SongFormRow,
  SongFormRowButtons,
} from './NewSong.styles';

interface NewSongProps {
    isOpen: boolean
    onClose: () => void
    data: IAlbum
}

interface FormStateProps {
  title: string
  number: string
  duration: string
}
export const NewSong: React.FC<NewSongProps> = (props) => {
  const { data, isOpen, onClose} = props;
  const {albumsData, setAlbumsData} = useContext(AlbumsContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Partial<FormStateProps>>({});
  const [formState, setFormState] = useState<FormStateProps>({
    title: '',
    number: '',
    duration: '',
  });

  useEffect(()=>{
    if(!isOpen && !loading){
      setFormState({
        title: '',
        number: '',
        duration: '',
      });
    }
  },[isOpen]);
   
  const validate = (values : FormStateProps) =>{
    const errors : Partial<FormStateProps> = {};
    const titleCheck = data?.tracks.find((e) => e.title == formState.title);
    const numberCheck = data?.tracks.find((e) => String(e.number) == formState.number);

    if(!values.title){errors.title = '*Titulo invalido';}
    else if(titleCheck) {errors.title = '*Este titulo já existe';}
    if(!values.number){errors.number = '*Numero invalido';}
    else if(numberCheck){errors.number = '*Este numero já existe';}
    if(!values.duration){errors.duration = '*Duração invalida';}

    return errors;
  };

  const handleChangeForm = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormState({...formState, [name]: value});
  };

  const handleSubmit = async () => {
    setLoading(true);
    setFormErrors(validate(formState));
  };

  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && loading){
      const fetch = async () => {
        try {
          const response = await Api('/track',{
            method:'POST',
            data:{
              ...formState,
              album_id: data.id,
            },
          });
          if(response.status == 200){
            
            const newData = albumsData.filter((e) => e.id != data.id);
            const newAlbuns = [...newData, 
              {...data, tracks: data.tracks 
                ? [...data.tracks, response.data] 
                : [response.data],
              }];

            setAlbumsData(newAlbuns);
            setLoading(false);
            onClose();
          }else{
            console.log(response);
          }
        } catch (err) {
          console.log(err);
        }
      };   

      fetch();

    }else{
      setLoading(false);
    }

  },[formErrors]);
  
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
              <SongFormInput 
                name='title'
                placeholder='Ex. Alma de boêmio'
                value={formState.title}
                disabled={loading}
                onChange={(e)=> handleChangeForm(e)}/>
              <Small fontWeight='regular' color={Colors.danger}>
                {formErrors.title}
              </Small>   
            </SongFormItem>
          </SongFormRow>
        </SongFormContainer>
        <SongFormContainer>
          <SongFormRow>
            <SongFormItem>
              <Small fontWeight='regular' >
                    Duração: (em segs)
              </Small>
              <SongFormInput 
                name='duration'
                type='number' 
                min={0} 
                placeholder="Ex. 2 min = 120 segs"
                value={formState.duration}
                disabled={loading}
                onChange={(e)=> handleChangeForm(e)}/>
              <Small fontWeight='regular' color={Colors.danger}>
                {formErrors.duration}
              </Small>   
            </SongFormItem>
            <SongFormItem>
              <Small fontWeight='regular'>
                    Numero da faixa:
              </Small>
              <SongFormInput 
                name='number'
                type='number'
                min={0}
                value={formState.number}
                disabled={loading}
                onChange={(e)=> handleChangeForm(e)}/>
              <Small fontWeight='regular' color={Colors.danger}>
                {formErrors.number}
              </Small>   
            </SongFormItem>
          </SongFormRow>
          <SongFormRowButtons>
            <SongButtonContainer>            
              <Button buttonType='half' 
                onClick={()=> onClose()}>
              Cancelar
              </Button>
            </SongButtonContainer>
            <SongButtonContainer >            
              <Button buttonType='primary' 
                loading={loading} 
                onClick={()=> handleSubmit()}>
              Adicionar
              </Button>
            </SongButtonContainer>
          </SongFormRowButtons>
        </SongFormContainer>
      </NewSongContainer>
    </Modal>
  );
};