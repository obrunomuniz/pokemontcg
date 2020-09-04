import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks';

import apolloClient from './graphql/apolloClient';

const App: React.FC = () => <ApolloProvider client={apolloClient} />;

export default App;
