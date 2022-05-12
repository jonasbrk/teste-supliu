import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { ButtonProps } from './Button';

const backgroundColor:  Record<ButtonProps['buttonType'], string> =  {
  primary: Colors.primary,
  half:  Colors.transparent,
  gray: Colors.gray,
  danger: Colors.danger,
};

const textColor: Record<ButtonProps['buttonType'], string> = {

  primary: Colors.white,
  half:  Colors.gray,
  gray: Colors.white,
  danger: Colors.white,  
};

export const ButtonContainer = styled.button<ButtonProps>`
height: 40px;
width: 100%;
background-color: ${(props)=> backgroundColor[props.buttonType]};
border: ${(props) => props.buttonType == 'half' ? `2px solid ${textColor[props.buttonType]}`: '0'};
border-radius: 100px;
transition: opacity 0.1s ease-in-out;
&:hover{
opacity: 0.8;
}
`;

export const ButtonLabel = styled.span<ButtonProps>`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
color: ${(props)=> textColor[props.buttonType]};
`;