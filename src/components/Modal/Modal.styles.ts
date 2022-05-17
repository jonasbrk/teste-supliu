import styled, { keyframes } from 'styled-components';
import { Colors } from '../../styles/colors';

export const ModalContainer = styled.div`
height: 100vh;
width: 100vw;
position: fixed;
left: 0;
top: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
`;

export const ModalOverlay = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.8);
cursor: pointer;
`;

const openAnimation = keyframes`

from {
    opacity: 0;
    transform: translateY(+30px);
}

to {
    transform: translateY(0px);
    opacity: 1;
}
`;

export const ModalBox = styled.div`
position: relative;
min-height: 100px;
min-width: 200px;
display: flex;
flex-direction: column;
box-sizing: border-box;
background-color:  ${Colors.white};
opacity: 0;
transform: translate(+30px);
animation: ${openAnimation} 0.3s ease-in-out forwards;
`;

export const ModalHeader = styled.div`
position: relative;
height: 50px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 5%);
background-color:  ${Colors.white};
`;

export const ModalCloseButton = styled.button`
position: absolute;
top: 16px;
right: 16px;
height: 15px;
width: 15px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${Colors.transparent};
border: 0;
transition: transform 0.1s ease;

:hover {
    transform: scale(1.1);
}
`;