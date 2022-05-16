import React from 'react';
import { LoadingIcon } from '../../assets/svg';
import { Colors } from '../../styles/colors';
import { Small } from '../../styles/typogaphy';
import { LoadingContainer, LoadingIconWapper } from './Loading.styles';

interface LoadingProps {
  fill?: string
}

export const Loading: React.FC<LoadingProps> = (props) => {

  const {fill = Colors.primary} = props;

  return (
    <LoadingContainer>
      <LoadingIconWapper>
        <LoadingIcon fill={fill}/>
      </LoadingIconWapper>
    </LoadingContainer>
  );
};