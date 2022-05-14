import React from 'react';
import { LoadingIcon } from '../../assets/svg';
import { Colors } from '../../styles/colors';
import { Small } from '../../styles/typogaphy';
import { LoadingContainer, LoadingIconWapper } from './Loading.styles';

export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingIconWapper>
        <LoadingIcon fill={Colors.primary}/>
      </LoadingIconWapper>
    </LoadingContainer>
  );
};