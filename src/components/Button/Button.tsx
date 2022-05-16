import React from 'react';
import { LoadingIcon } from '../../assets/svg';
import { Colors } from '../../styles/colors';
import { ButtonContainer, ButtonLabel, loadingColor } from './Button.style';

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
      <ButtonLabel buttonType={buttonType}>
        { loading ? <LoadingIcon fill={loadingColor[buttonType]} heigth='24px'/> : children}
      </ButtonLabel>
    </ButtonContainer>
  );
};

