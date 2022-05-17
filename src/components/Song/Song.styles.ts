import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Button } from '../Button';

export const SongContainer = styled.div`
width: 100%;
height: 30px;
display: grid;
grid-gap: 16px;
grid-template-columns: [index] 16px [first] 1fr [delete] auto [last] 55px;
`;

interface SongWrapperProps {
    column: 'index' |  'first' | 'delete' | 'last'
}

export const SongColumn = styled.div<SongWrapperProps>`
height: 100%;
display: flex;
align-items: center;
grid-column: ${props => props.column && props.column};
`;

export const SongDeleteButton = styled.div`

height: 16px;
width: 16px;
display: flex;
justify-content: center;
align-items: center;

opacity: 0;
transition: all 0.1s ease-in-out;

${SongContainer}:hover & {
    opacity: 1;

}

`;