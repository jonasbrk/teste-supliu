import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon, TrashIcon } from '../../assets/svg';
import { Album, Button, Modal, NewSong } from '../../components';
import { Warning } from '../../components/Warning';
import { dataWarningProps } from '../../components/Warning/Warning';
import { Api } from '../../services/api';
import { Colors } from '../../styles/colors';
import { Small } from '../../styles/typogaphy';
import { IAlbum } from '../../typings/response';
import { AlbumsContext } from '../../utils/context';
import { useTimeFormater } from '../../utils/useTimeFormater';
import { TemplateButton, DescriptionWrapper, SongList, TemplateBanner, TemplateContainer, TemplateDescription, TemplateHeader, TemplateTitle, SongAddContainer } from './AlbumTemplate.styles';

export const AlbumTemplate = () => {
  const { id } = useParams();
  const {albumsData, setAlbumsData} = useContext(AlbumsContext);
  const [ data , setData ] = useState<IAlbum[]>(albumsData.filter((e)=> String(e.id) == id));
  const {name, tracks = [], year } = data[0];
  const [loading, setLoading] = useState<boolean>(false);
  
  const [warning, setWarning] = useState<boolean>(false);
  const [newSong, setNewSong] = useState<boolean>(false);

  useEffect(()=>{
    const newData = albumsData.filter((e)=> String(e.id) == id);
    setData(newData);
  }, [albumsData]);

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

  const navigate = useNavigate();

  return (
    <TemplateContainer>
      <Warning 
        isOpen={warning}
        onClose={()=> setWarning(false)}
        data={{...data[0], type: 'album'}}
        onValidate={handleDelete}
        loading={loading}
      />
        
      <NewSong data={data[0]} isOpen={newSong} onClose={()=> setNewSong(false)}/>
      <TemplateHeader>
        <TemplateButton onClick={()=> navigate('/')}>
          <ArrowLeftIcon heigth='16px'/>
          <Small fontWeight='regular'>
              Voltar
          </Small>
        </TemplateButton>
        <TemplateButton onClick={()=> handleDelete({...data[0], type: 'album'}, false)}>
          <Small fontWeight='regular' color={Colors.danger}>
              Excluir Album
          </Small>
        </TemplateButton>
      </TemplateHeader>
      <TemplateBanner>
        <TemplateTitle>
          {name}
        </TemplateTitle>
        <TemplateDescription>
          <DescriptionWrapper>
            <Small fontWeight='light'>
                Lançado em:
            </Small>
            <Small fontWeight='bold'>
              {year}
            </Small>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <Small fontWeight='light'>
                Numero de musicas:
            </Small>
            <Small fontWeight='bold'>
              {tracks.length}
            </Small>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <Small fontWeight='light'>
                Tempo de reprodução total:
            </Small>
            <Small fontWeight='bold'>
              {tracks.length &&
                useTimeFormater(tracks.map((e) => e.duration).reduce((p, c) => p + c), true) 
              }
            </Small>
          </DescriptionWrapper>

        </TemplateDescription>
      </TemplateBanner>

      <SongList>
        <Album data={data[0]} header={false}/>
      </SongList>
      <SongAddContainer >
        <Button buttonType='primary' onClick={()=> setNewSong(true)}>
            Nova Faixa
        </Button>
      </SongAddContainer>   
    </TemplateContainer>
  );
};