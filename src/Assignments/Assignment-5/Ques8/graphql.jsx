import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query MyQuery {
    getAirports(order: { field: ICAO_CODE }, first: 10) {
      edges {
        node {
          name
          country {
            name
          }
        }
      }
    }
  }
`;
