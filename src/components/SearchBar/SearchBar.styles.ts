import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const SearchBarContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: flex-end;
gap: 16px;
`;

export const SearchInputContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 8px;
`;

export const SearchButtonContainer = styled.div`
width: 20%;
max-width: 150px;
min-width: 80px;
`;

export const SearchInput = styled.input`
height: 40px;
background-color: ${Colors.white};
border-radius: 100px;
border: 0;
box-sizing: border-box;
padding: 6px 16px;
outline: none;
color: ${Colors.darkerGray};
`;