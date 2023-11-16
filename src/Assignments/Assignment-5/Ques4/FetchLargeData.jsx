import { useEffect, useState } from "react";
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
