import styled, { keyframes } from 'styled-components';
import { Colors } from '../../styles/colors';

export const WarningContainer = styled.div`
height: 250px;
width: 350px;
display: flex;
flex-direction: column;
box-sizing: border-box;
background-color: #f5f5f5;
justify-content: space-between;
`;

export const WarningMain = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 36px;
padding: 0 16px;
box-sizing: border-box;
align-items: center;
`;

export const WarningFooter = styled.div`
height: 100px;
width: 100%;
display: flex;
padding: 16px;
gap: 36px;
box-sizing: border-box;
background-color: ${Colors.white};
align-items: center;
justify-content: space-around;
box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 5%);
`;