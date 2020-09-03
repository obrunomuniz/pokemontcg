import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#06c551" />
    <View style={{ flex: 1, backgroundColor: '#06c551' }} />
  </>
);

export default App;
