import React from 'react';

import { LoadingIcon } from '../../assets/svg';

import { Colors } from '../../styles/colors';

import { LoadingContainer, LoadingIconConatainer } from './Loading.styles';

interface LoadingProps {
  fill?: string
}

export const Loading: React.FC<LoadingProps> = (props) => {

  const {fill = Colors.primary} = props;

  return (
    <LoadingContainer>
      <LoadingIconConatainer>
        <LoadingIcon fill={fill}/>
      </LoadingIconConatainer>
    </LoadingContainer>
  );
};