import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const AlbumContainer = styled.div`
display: flex;
width: 100%;
padding: 0 10px;
margin: 16px 0;
box-sizing: border-box;
flex-direction: column;
overflow: hidden;
`;

export const AlbumHeader = styled.div`
height: 40px;
width: 100%;
display: flex;
align-items: center;
gap: 16px;
cursor: pointer;
`;

export const AlbumHeaderLabel = styled.div`
height: 100%;
display: flex;
align-items: center;
transition: all 0.2s ease-in-out;

${AlbumContainer}:hover & {
    transform: translateX(+10px);
    color: ${Colors.primary};
}
`;

export const AlbumMain = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

export const SongHeader = styled.div`
width: 100%;
height: 30px;
display: grid;
grid-gap: 16px;
grid-template-columns: [index] 16px [first] 1fr [last] 55px;
`;

interface SongInfoContainerProps {
    column: 'index' |  'first' | 'last'
}

export const SongInfoContainer = styled.div<SongInfoContainerProps>`
height: 100%;
display: flex;
align-items: center;
grid-column: ${props => props.column && props.column};
`;