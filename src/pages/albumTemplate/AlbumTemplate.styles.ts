import styled from 'styled-components';
import { Colors } from '../../styles/colors';


export const TemplateContainer = styled.div`

height: 100%;
width: 100%;
display: flex;
flex-direction: column;
position: relative;

`;

export const TemplateHeader = styled.div`
height: 40px;
width: 100%;
display: flex;
padding: 0 10px;
box-sizing: border-box;
align-items: center;
justify-content: space-between;
`; 

export const TemplateButton = styled.button`

height: 30px;
min-width: 30px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${Colors.transparent};
gap: 8px;
border: 0;
transition: transform 0.1s ease;
cursor: pointer;

:hover {

    transform: scale(1.1);
}
`;

export const TemplateBanner = styled.div`

height: 200px;
width: 100%;
padding: 16px 10px;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const TemplateTitle = styled.h1`
color: ${Colors.darkerGray};
font-size: 48px;
`;

export const TemplateDescription = styled.div`

height: 40px;
width: 100%;
display: grid;
grid-template-columns: [first] 1fr [second] 1fr [third] 1fr;
`; 

export const DescriptionWrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
gap: 16px;
align-items: center;
justify-content: center;
`;

export const SongList = styled.div`
height: calc(100% - 200px) ;
width: 100%;
padding: 0 10px;
padding-bottom: 40px;
margin: 16px 0;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: auto;
`;

export const SongAddContainer = styled.div`
width: 20%;
max-width: 150px;
min-width: 80px;
position: absolute;
bottom: 16px;
right: 16px;
`;