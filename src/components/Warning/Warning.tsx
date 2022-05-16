import React from 'react';
import { Colors } from '../../styles/colors';
import { Description, Title } from '../../styles/typogaphy';
import { Button } from '../Button';
import { Modal } from '../Modal';
import {  WarningContainer, WarningFooter, WarningMain } from './Warning.styles';

export interface dataWarningProps {
        id: number
        type: 'album' | 'track'
        name: string
}

interface WarningProps {
    data: dataWarningProps
    onValidate: (data:dataWarningProps, validate: boolean)=> void
    onClose: () => void
    isOpen: boolean
}

export const Warning :React.FC<WarningProps> = (props) => {

  const {data, isOpen, onClose, onValidate} = props;
  const { id, name, type} = data;
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <WarningContainer>
        <WarningMain>
          <Description fontWeight='bold' color={Colors.darkerGray}>
            Voce está prestes a excluir {type == 'album'? 'o album' : 'a faixa'} {name}, está ação é irreversivel.
          </Description>
          <Description fontWeight='bold' color={Colors.darkerGray}>
              Deseja continuar?
          </Description>

        </WarningMain>
        <WarningFooter>
          <Button buttonType='half' onClick={()=> onClose()}>
              Cancelar
          </Button>
          <Button buttonType='primary' onClick={()=> onValidate(data, true)}>
              Excluir
          </Button>
        </WarningFooter>
      </WarningContainer>
    </Modal>
  );
};
