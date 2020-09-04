import React from 'react';
import { View } from 'react-native';

import {
  Container,
  TextsContainers,
  Text,
  TextStrong,
  Logo,
  PhoneIcon,
  ApiIcon,
  PlayerIcon,
  TitleContainer,
  TitleIcon,
  TitleText,
  TextMarginLeft,
  GotchaIcon,
  HeartIcon,
  Link,
} from './styles';

export default function Drawer() {
  return (
    <Container>
      <Logo />
      <TextsContainers
        contentContainerStyle={{
          paddingVertical: 10,
        }}
      >
        <Text style={{ marginTop: -5 }}>
          Projeto desenvolvido para aprimorar os
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginTop: 0 }}>conhecimentos com React Native</Text>
          <PhoneIcon />
        </View>
        <Text style={{ marginTop: 20 }}>Esse app é alimentado via GraphQL</Text>
        <TitleContainer>
          <TitleIcon />
          <TitleText>Bibliotecas Utilizadas</TitleText>
        </TitleContainer>
        <TextMarginLeft>React Native</TextMarginLeft>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextMarginLeft>GraphQL</TextMarginLeft>
          <GotchaIcon />
        </View>
        <TextMarginLeft>Styled Components</TextMarginLeft>
      </TextsContainers>
    </Container>
  );
}
