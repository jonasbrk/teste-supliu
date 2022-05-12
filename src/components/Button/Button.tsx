import React from 'react';
import { ButtonContainer, ButtonLabel } from './Button.style';

export interface ButtonProps {
    buttonType:'primary'| 'half' | 'gray' | 'danger'
    children?: any
    onClick?: ()=> void
}

export const Button : React.FC<ButtonProps > = (props) => {
  const {children, buttonType, onClick} = props;

  return (
    <ButtonContainer buttonType={buttonType} onClick={onClick} >
      <ButtonLabel buttonType={buttonType}>
        {children}
      </ButtonLabel>
    </ButtonContainer>
  );
};

