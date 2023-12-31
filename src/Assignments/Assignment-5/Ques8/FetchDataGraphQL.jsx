import { useQuery } from "@apollo/client";
import { GET_DATA } from "./graphql";
const FetchDataGraphQL = () => {
  const { data, loading, error } = useQuery(GET_DATA);
  let showData = loading ? "Can't get data" : data?.getAirports.edges;
  return (
    <>
      <h4>GraphQL Data fetch</h4>
      {!loading &&
        showData?.map((item) => {
          return (
            <li>
              {item.node.name} - {item.node.country.name}
            </li>
          );
        })}
    </>
  );
};
export default FetchDataGraphQL;
