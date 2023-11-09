import { useQuery } from "@apollo/client";
import { GET_ALL_CAPITALS } from './graphQuery'
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
const FetchLargeDataGraphQL =()=>
{
    const { data, loading, error} = useQuery(GET_ALL_CAPITALS);

    console.log(data?.countries.edges, loading, error);

    let showData = loading ? "Can't get data" : data?.countries.edges
    console.log(showData)
    
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