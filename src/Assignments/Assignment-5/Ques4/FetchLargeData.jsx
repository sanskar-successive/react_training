// 4.Fetch a large dataset from an API and implement pagination. 
// Display a limited number of items per page and provide navigation controls to load more pages of data.

import { useState } from "react";
import Pagination from "./Pagination";

const FetchLargeData = () => {
  const [data, setData] = useState([]);
  const apiURL = "https://jsonplaceholder.typicode.com/posts";
  const handleDataFetch = async () => {
    const response = await fetch(apiURL);
    const apiData = await response.json();
    setData(apiData);
  };
  return (
    <>
      <h3>Fetching API data</h3>
      <button onClick={handleDataFetch}>Fetch Data</button>
      <Pagination rows={data} rowsPerPage={10}/>
    </>
  );
};
export default FetchLargeData;
