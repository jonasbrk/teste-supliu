import React from 'react';

import { LoadingIcon } from '../../assets/svg';

import { Small } from '../../styles/typogaphy';

import { ButtonContainer, loadingColor, textColor } from './Button.style';

export interface ButtonProps {
    buttonType:'primary'| 'half' | 'gray' | 'danger'
    children?: any
    onClick?: ()=> void
    loading?: boolean
}

export const Button : React.FC<ButtonProps > = (props) => {
  const {loading, children, buttonType, onClick} = props;

  return (
    <ButtonContainer buttonType={buttonType} onClick={onClick} disabled={loading}>
      { loading ? 
        <LoadingIcon fill={loadingColor[buttonType]} heigth='24px'/> 
        :
        <Small fontWeight='regular' color={textColor[buttonType]}>
          {children}
        </Small>}
    </ButtonContainer>
  );
};

