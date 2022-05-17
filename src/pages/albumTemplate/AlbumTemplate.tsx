import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeftIcon } from '../../assets/svg';

import { dataWarningProps } from '../../components/Warning/Warning';
import { IAlbum } from '../../typings/response';

import { AlbumsContext } from '../../utils/context';
import { useTimeFormater } from '../../utils/useTimeFormater';

import { Api } from '../../services/api';

import { Album, Button, NewSong, Warning, Loading } from '../../components';

import { Colors } from '../../styles/colors';
import { Small } from '../../styles/typogaphy';
import { 
  TemplateButton,
  DescriptionWrapper,
  SongList,
  TemplateBanner,
  TemplateContainer,
  TemplateDescription, 
  TemplateHeader, 
  TemplateTitle, 
  SongAddContainer,
} from './AlbumTemplate.styles';

export const AlbumTemplate = () => {
  const { id } = useParams();
  const {albumsData, setAlbumsData} = useContext(AlbumsContext);
  const [ data , setData ] = useState<IAlbum>(albumsData.filter((e)=> String(e.id) == id)[0]);
  const [loading, setLoading] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);
  const [newSong, setNewSong] = useState<boolean>(false);
  
  const navigate = useNavigate();

  useEffect(()=>{
    if(albumsData.length){
      const newData = albumsData.filter((e)=> String(e.id) == id)[0];
      if(newData){
        setData(newData);
      }else{
        navigate('/');
      }
    }
  }, [albumsData, data]);

  const handleDelete = async (dataProps : dataWarningProps, validate: boolean ) => {

    if(!validate){
      setWarning(true);
    }
    else{
      setLoading(true);
      try {
        const response = await Api('/album/' + dataProps.id,{
          method:'DELETE',
        });
        if(response.status == 200){
          setAlbumsData(albumsData.filter((e) => e.id != dataProps.id));
          setLoading(false);
          navigate('/');   
        }else{
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      } 
    }
  };

  return (
    <>
      {!data 
        ? 
        <Loading/> 
        :  
        <TemplateContainer>
          <Warning 
            isOpen={warning}
            onClose={()=> setWarning(false)}
            data={{...data, type: 'album'}}
            onValidate={handleDelete}
            loading={loading}
          />
          <NewSong data={data} isOpen={newSong} onClose={()=> setNewSong(false)}/>
          <TemplateHeader>
            <TemplateButton onClick={()=> navigate('/')}>
              <ArrowLeftIcon height='16px'/>
              <Small fontWeight='regular'>
              Voltar
              </Small>
            </TemplateButton>
            <TemplateButton onClick={()=> handleDelete({...data, type: 'album'}, false)}>
              <Small fontWeight='regular' color={Colors.danger}>
              Excluir Album
              </Small>
            </TemplateButton>
          </TemplateHeader>
          <TemplateBanner>
            <TemplateTitle>
              {data.name}
            </TemplateTitle>
            <TemplateDescription>
              <DescriptionWrapper>
                <Small fontWeight='light'>
                Lançado em:
                </Small>
                <Small fontWeight='bold'>
                  {data.year}
                </Small>
              </DescriptionWrapper>
              <DescriptionWrapper>
                <Small fontWeight='light'>
                Numero de musicas:
                </Small>
                <Small fontWeight='bold'>
                  {data.tracks.length}
                </Small>
              </DescriptionWrapper>
              <DescriptionWrapper>
                <Small fontWeight='light'>
                Tempo de reprodução total:
                </Small>
                <Small fontWeight='bold'>
                  {data.tracks.length &&
                useTimeFormater(data.tracks.map((e) => Number(e.duration)).reduce((p, c) => p + c), true) 
                  }
                </Small>
              </DescriptionWrapper>
            </TemplateDescription>
          </TemplateBanner>
          <SongList>
            <Album data={data} header={false}/>
          </SongList>
          <SongAddContainer >
            <Button buttonType='primary' onClick={()=> setNewSong(true)}>
            Nova Faixa
            </Button>
          </SongAddContainer>   
        </TemplateContainer>
      }
    </>
  );
};