import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const NewSongContainer = styled.div`
width: 400px;
display: flex;
flex-direction: column;
padding: 32px;
background-color: #f5f5f5;
`;

export const SongFormContainer = styled.div`
margin-top: 24px;
width: 100%;
display: flex;
flex-direction: column;
gap: 16px;
justify-content: center;
`;

export const SongFormRow = styled.div`
height: 100px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 16px;
`;

export const SongFormItem = styled.div`
height: 100px;
width: 100%;
display: flex;
flex-direction: column;
gap: 16px;
`;

export const SongFormInput = styled.input`
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

export const SongFormRowButtons = styled(SongFormRow)`
height: 50px;
justify-content: center;
gap: 32px;
`;

export const SongButtonContainer = styled.div`
width: 100%;
max-width: 150px;
min-width: 80px;
display: flex;
gap: 16px;
justify-content: space-around;
`;