// 8.set up a GraphQL client library like Apollo Client. Create a simple component that uses the client 
// to fetch and display data from a GraphQL API.

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import FetchDataGraphQL from "./FetchDataGraphQL";
const link = new HttpLink({
  uri: "https://aviation-weather-and-airport-data.p.rapidapi.com/graphql",
  headers: {
		'x-rapidapi-key': '7b0553b7b0mshc584db9a76227a1p17ec44jsn43a0d948276a',
		'x-rapidapi-host': 'aviation-weather-and-airport-data.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
const ApolloProvider1 = () => {
  return (
    <ApolloProvider client={client}>
      < FetchDataGraphQL />
    </ApolloProvider>
  );
};
export default ApolloProvider1;