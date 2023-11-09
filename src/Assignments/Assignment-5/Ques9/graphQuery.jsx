import { gql } from "@apollo/client";

export const GET_ALL_CAPITALS = gql`
query MyQuery {
    countries(displayOptions: {}, currencyCode: "", namePrefix: "") {
      edges {
        node {
          capital
          name
        }
      }
    }
  
  }
`;
