import styled from 'styled-components';

export const SongContainer = styled.div`
width: 100%;
height: 30px;
display: grid;
grid-gap: 16px;
grid-template-columns: [index] 16px [first] 1fr [last] 55px;
`;

interface SongWrapperProps {
    column: 'index' |  'first' | 'last'
}

export const SongWrapper = styled.div<SongWrapperProps>`
height: 100%;
display: flex;
align-items: center;
grid-column: ${props => props.column && props.column};
`;