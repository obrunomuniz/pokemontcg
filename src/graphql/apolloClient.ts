// import { ApolloClient } from 'apollo-boost';
// import { ApolloClient } from '@apollo/client';
import ApolloClient from 'apollo-boost';

import { API_URL } from '../environment/index';

export default new ApolloClient({
  uri: API_URL,
});
