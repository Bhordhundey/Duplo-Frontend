import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const GRAPHQL_API = process.env.REACT_APP_GRAPHQL_API;

const link = createHttpLink({ uri: GRAPHQL_API && GRAPHQL_API });

const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  const auth =   `Bearer ${process.env.REACT_APP_GRAPHQL_KEY} `
  return {
    headers: {
      ...headers,
      Authorization: auth
    }
  };
});

const client = new ApolloClient({
  cache: cache,
  link: authLink.concat(link as unknown as ApolloLink)
});

export default client;
