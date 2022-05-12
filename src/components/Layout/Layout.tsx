import React from 'react';
import { Header, PageContainer, LayoutContainer, Logo, Main } from './Layout.styles';
import logoURL from '../../assets/images/logo.png';
import { Title } from '../../styles/typogaphy';
import { Colors } from '../../styles/colors';

export const Layout = (props : any) => {
  const {children} = props;
  return (
    <LayoutContainer>
      <PageContainer>
        <Header>
          <Logo src={logoURL}/>
          <Title fontWeight='light' color={Colors.darkerGray}>
            Discografia
          </Title>
        </Header>
        <Main>
          {children}
        </Main>
      </PageContainer>
    </LayoutContainer>
  );
};
