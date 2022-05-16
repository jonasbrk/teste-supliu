import styled from 'styled-components';

export const HomeContainer = styled.div`

height: 100%;
width: 100%;
display: flex;
flex-direction: column;
gap: 16px;
position: relative;
`;

export const SearchResults = styled.div`

height: 100%;
width: 100%;
display: flex;
flex-direction: column;
overflow-y: auto;
padding-bottom: 50px;

`;


export const AlbumAddContainer = styled.div`
width: 20%;
max-width: 150px;
min-width: 80px;
position: absolute;
bottom: 16px;
right: 16px;
`;