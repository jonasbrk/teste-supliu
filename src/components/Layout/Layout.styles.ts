import styled from 'styled-components';
import background from '../../assets/images/background.png';
import { Colors } from '../../styles/colors';

export const LayoutContainer = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: flex-start;
justify-content: center;
background-image: url(${background});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
height: 80%;
width: 60%;
max-width: 1000px;
margin-top: 16px;
background-color: ${Colors.halfTransparent};

@media ( max-width: 700px) {
    width: 90%;
}
`;

export const Header = styled.header`
height: 100px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 16px;
box-sizing: border-box;
background-color: ${Colors.white};
box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 5%);
`;

export const Main = styled.main`
height: calc(100% - 100px);
width: 100%;
display: flex;
flex-direction: column;
padding: 16px;
box-sizing: border-box;
`;

export const Logo = styled.img`
height: 80%;
`;