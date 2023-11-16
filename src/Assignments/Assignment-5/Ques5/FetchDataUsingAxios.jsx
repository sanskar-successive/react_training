import { useState } from "react";
import axios from "axios";

const FetchDataUsingAxios = () => {
  const apiURL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const handleDataFetch = async () => {
    const response = await axios.get(apiURL);
    setData(response.data)
  };
  return (
    <>
      <h3>Fetch API data using axios</h3>
      <button onClick={handleDataFetch}>Fetch data</button>
      {data.map((item) => {
        return <li>{item.title}</li>;
      })}
    </>
  );
};
export default FetchDataUsingAxios;
