import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIcon } from '../../assets/svg';

import { AlbumsContext } from '../../utils/context';

import { Api } from '../../services/api';

import { Button } from '../../components';

import { Colors } from '../../styles/colors';
import { Description, Small, Title } from '../../styles/typogaphy';
import { AlbumFormButtonContainer, AlbumFormContainer, AlbumFormInput, AlbumFormInputContainer, AlbumFormRow, AlbumFormRowButtons, NewAlbumButton, NewAlbumContainer, NewAlbumHeader, NewAlbumMain } from './NewAlbum.styles';

interface FormStateProps {
  name: string,
  year: string,
}

export const NewAlbum = () => {
  const {albumsData, setAlbumsData} = useContext(AlbumsContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Partial<FormStateProps>>({});
  const [formState, setFormState] = useState<FormStateProps>({
    name: '',
    year: '',
  });

  const navigation = useNavigate();

  const validate = (values : FormStateProps) =>{
    const errors : Partial<FormStateProps> = {};
    const nameCheck = albumsData && albumsData.find((e)=> e.name == formState.name);

    if(!values.name){errors.name = '*Nome invalido';}
    else if(nameCheck) {errors.name = '*Este nome já existe';}
    if(!values.year || Number(values.year) < 0)
    {errors.year = '*Ano invalido';}
    else if(values.year.length != 4) {
      errors.year = '*formato invalido. Ex. 1989';
    }

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
          const response = await Api('/album',{
            method:'POST',
            data: formState,
          });
          if(response.status == 200){
            setAlbumsData([...albumsData, response.data]);
            setLoading(false);
            navigation('/album/' + response.data.id);
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
    <NewAlbumContainer>
      <NewAlbumHeader>
        <NewAlbumButton onClick={() => navigation(-1)}>
          <ArrowLeftIcon heigth='16px'/>
          <Small fontWeight='regular'>
              Voltar
          </Small>
        </NewAlbumButton>
      </NewAlbumHeader>
      <NewAlbumMain>
        <Title fontWeight='bold'>
            Novo álbum
        </Title>
        <Description fontWeight='regular'>
            Para adicionar um novo álbum preencha os dados abaixo.
        </Description>
        <AlbumFormContainer>
          <AlbumFormRow>
            <AlbumFormInputContainer>
              <Small fontWeight='regular'>Nome:</Small>
              <AlbumFormInput 
                name='name'
                placeholder='Ex. Rei do gado'
                value={formState.name}
                disabled={loading}
                onChange={(e)=> handleChangeForm(e)}/>
              <Small fontWeight='regular' color={Colors.danger}>
                {formErrors.name}
              </Small>  
            </AlbumFormInputContainer>
            <AlbumFormInputContainer>
              <Small fontWeight='regular'>Ano:</Small>
              <AlbumFormInput 
                name='year'
                placeholder='Ex. 1989'
                value={formState.year}
                type='number' 
                min={0} 
                disabled={loading}
                onChange={(e)=> handleChangeForm(e)}/>
              <Small fontWeight='regular' color={Colors.danger}>
                {formErrors.year}
              </Small>
            </AlbumFormInputContainer>    
          </AlbumFormRow>
          <AlbumFormRowButtons>
            <AlbumFormButtonContainer>            
              <Button buttonType='half' 
                onClick={() => navigation(-1)}>
              Cancelar
              </Button>
            </AlbumFormButtonContainer>
            <AlbumFormButtonContainer>            
              <Button buttonType='primary' 
                loading={loading} 
                onClick={() => handleSubmit()}>
              Adicionar
              </Button>
            </AlbumFormButtonContainer>
          </AlbumFormRowButtons>
        </AlbumFormContainer>
      </NewAlbumMain>
    </NewAlbumContainer>
  );
};