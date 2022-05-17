import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIcon } from '../../assets/svg';

import { AlbumsContext } from '../../utils/context';

import { Api } from '../../services/api';

import { Button } from '../../components';

import { Colors } from '../../styles/colors';
import { Description, Small, Title } from '../../styles/typogaphy';
import { AlbumFormButtonContainer, AlbumFormContainer, AlbumFormInput, AlbumFormInputContainer, AlbumFormRow, AlbumFormRowButtons, NewAlbumButton, NewAlbumContainer, NewAlbumHeader, NewAlbumMain } from './NewAlbum.styles';

export const NewAlbum = () => {
  const {albumsData, setAlbumsData} = useContext(AlbumsContext);
  const [nameInput, setNameInput] = useState<string>('');
  const [yearInput, setYearInput] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigate();

  const errors = {
    exist: '*Este nome já existe',
    name: '*Nome invalido',
    year: '*Ano invalido',
  };

  const existCheck = albumsData && albumsData.find((e)=> e.name == nameInput);

  const handleAdd = async () => {

    if(
      !nameInput 
      || !yearInput 
      || yearInput.length != 4 
      || existCheck
    ){
      setError(true);

    }else{
      setLoading(true);
      try {
        const response = await Api('/album',{
          method:'POST',
          data:{
            name: nameInput,
            year: yearInput,
          },
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
    }
  };
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
              <AlbumFormInput onChange={(e)=> setNameInput(e.target.value)}/>
              {((!nameInput && error) || existCheck) && 
                  <Small fontWeight='regular' color={Colors.danger}>
                    {existCheck ? errors.exist : errors.name}
                  </Small>
              }
            </AlbumFormInputContainer>
            <AlbumFormInputContainer>
              <Small fontWeight='regular'>Ano:</Small>
              <AlbumFormInput type='number' min={0} onChange={(e)=> setYearInput(e.target.value)}/>
              {(yearInput.length != 4 && error) && 
              <Small fontWeight='regular' color={Colors.danger}>
                {errors.year}
              </Small>
              }
            </AlbumFormInputContainer>    
          </AlbumFormRow>
          <AlbumFormRowButtons>
            <AlbumFormButtonContainer>            
              <Button buttonType='half' onClick={() => navigation(-1)}>
              Cancelar
              </Button>
            </AlbumFormButtonContainer>
            <AlbumFormButtonContainer>            
              <Button buttonType='primary' loading={loading} onClick={() => handleAdd()}>
              Adicionar
              </Button>
            </AlbumFormButtonContainer>
          </AlbumFormRowButtons>
        </AlbumFormContainer>
      </NewAlbumMain>
    </NewAlbumContainer>
  );
};