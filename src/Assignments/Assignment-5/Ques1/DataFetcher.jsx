// 1.Create a React component that fetches data from a public API 
// (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.

import { useEffect, useState } from "react";

const DataFetcher = () => {
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
      {data.map((item) => (
        <li>{item.title}</li>
      ))}
    </>
  );
};
export default DataFetcher;
