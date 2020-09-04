import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

import apolloClient from './graphql/apolloClient';
import { SearchbarProvider } from './contexts';

const DefaultTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#E53935',
    accent: '#FFF',
    background: '#FFF',
  },
};

const App: React.FC = () => (
  <>
    <ApolloProvider client={apolloClient}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer theme={DefaultTheme}>
          <SearchbarProvider>{/* TODO: Rotasss */}</SearchbarProvider>
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  </>
);

export default App;
