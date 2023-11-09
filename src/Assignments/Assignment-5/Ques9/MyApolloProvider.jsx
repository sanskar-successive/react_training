import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";
import FetchLargeDataGraphQL from "./FetchLargeDataGraphQL";
  const link = new HttpLink({
    uri: 'https://geodb-cities-graphql.p.rapidapi.com/',
    headers: {
      "x-rapidapi-key": "7b0553b7b0mshc584db9a76227a1p17ec44jsn43a0d948276a",
      "x-rapidapi-host": "geodb-cities-graphql.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  });
  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });
  const MyApolloProvider = () => {
    return (
      <ApolloProvider client={client}>
        <FetchLargeDataGraphQL/>
      </ApolloProvider>
    );
  };
  export default MyApolloProvider;