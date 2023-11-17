// 9.Create a React component that makes GraphQL queries to retrieve a list of items 
// (e.g., a list of books, movies, or products) from a GraphQL API. Implement pagination for 
// large datasets and display the data in a user-friendly way.

import { useQuery } from "@apollo/client";
import { GET_ALL_CAPITALS } from './graphQuery'
import Pagination from "./Pagination";
const FetchLargeDataGraphQL =()=>
{
    const { data, loading, error} = useQuery(GET_ALL_CAPITALS);
    let showData = loading ? "Can't get data" : data?.countries.edges
      return(
        <>
            <h4>Hello</h4>
            {!loading && showData?.map((item)=>{
                return(
                    <li>
                        {item.node.name} - {item.node.capital}
                    </li>
                )
            })}
            {!loading && <Pagination rows={showData} rowsPerPage={3}/>}
        
        </>
      )
}
export default FetchLargeDataGraphQL