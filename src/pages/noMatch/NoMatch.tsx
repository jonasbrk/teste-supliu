import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { Title } from '../../styles/typogaphy';
import {
  NoMatchButtonContainer, 
  NoMatchContainer, 
} from './NoMatch.styles';

export const NoMatch = () => {

  const navigate = useNavigate();
    
  return (
    <NoMatchContainer>
      <Title fontWeight='bold'>
            Esta pagina não existe.
      </Title>
      <NoMatchButtonContainer>
        <Button buttonType='primary' onClick={() => navigate('/')}>
            Voltar para a Home
        </Button>  
      </NoMatchButtonContainer>
    </NoMatchContainer>
  );
};
