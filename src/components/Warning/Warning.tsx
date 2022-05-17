import React from 'react';

import { Button, Modal } from '../';

import { Colors } from '../../styles/colors';
import { Description } from '../../styles/typogaphy';
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
    loading?: boolean
}

export const Warning :React.FC<WarningProps> = (props) => {

  const {data, loading, isOpen, onClose, onValidate} = props;
  const {  name, type} = data;
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='ATENÇÃO'>
      <WarningContainer>
        <WarningMain>
          <Description fontWeight='regular' color={Colors.darkerGray}>
            Voce está prestes a excluir {type == 'album'? 'o album' : 'a faixa'} {name}, esta ação é irreversível.
          </Description>
          <Description fontWeight='bold' color={Colors.darkerGray}>
              Deseja continuar?
          </Description>
        </WarningMain>
        <WarningFooter>
          <Button buttonType='half' onClick={()=> onClose()}>
              Cancelar
          </Button>
          <Button buttonType='primary' loading={loading} onClick={()=> onValidate(data, true)}>
              Excluir
          </Button>
        </WarningFooter>
      </WarningContainer>
    </Modal>
  );
};
