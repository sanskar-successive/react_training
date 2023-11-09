import { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const apiURL = "https://jsonplaceholder.typicode.com/posts";

    // const handleDataFetch = () => {

    //     const promise = fetch(apiURL);

    //     return promise
    //     .then((res) => res.json())
    //     .then((apiData) => setData(apiData))
    //     .catch((err) => console.log(err));
    // };

  const handleDataFetch = async () => {
    const response = await fetch(apiURL);
    const apiData = await response.json();

    setData(apiData);
  };


//   useEffect(() => {
//     handleDataFetch();
//   }, []);

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
