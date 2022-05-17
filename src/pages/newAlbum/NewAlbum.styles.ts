import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const NewAlbumContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;

`;

export const NewAlbumHeader = styled.div`
height: 40px;
width: 100%;
display: flex;
padding: 0 10px;
box-sizing: border-box;
align-items: center;
justify-content: space-between;
`; 

export const NewAlbumButton = styled.button`

height: 30px;
min-width: 30px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${Colors.transparent};
gap: 8px;
border: 0;
transition: transform 0.1s ease;

:hover {

    transform: scale(1.1);
}
`;

export const NewAlbumMain = styled.div`

height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 0 10px;
`;

export const AlbumFormContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
gap: 16px;
`;

export const AlbumFormRow = styled.div`
width: 100%;
display: flex;
gap: 16px;
justify-content: center;
`;

export const AlbumFormRowButtons = styled(AlbumFormRow)`
justify-content: center;
gap: 32px;
`;

export const AlbumFormButtonContainer = styled.div`
width: 20%;
max-width: 150px;
min-width: 80px;
display: flex;
gap: 16px;
justify-content: space-around;
`;

export const AlbumFormInputContainer = styled.div`
height: 100px;
display: flex;
flex-direction: column;
gap: 16px;
`;

export const AlbumFormInput = styled.input`
width: 100%;
height: 30px;
background-color: ${Colors.white};
padding: 4px 8px;
color: ${Colors.darkerGray};
accent-color: ${Colors.darkerGray};
outline: none;
border: 1px solid ${Colors.halfTransparent};
box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 5%);
border-radius: 4px ;
`;