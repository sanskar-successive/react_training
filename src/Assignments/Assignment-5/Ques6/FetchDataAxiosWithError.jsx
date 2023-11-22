// 6.Modify the previous assignment to implement error handling using Axios. 
// Display an error message if the request fails and provide a way for the user to retry the request.

import axios from "axios";
import { useState } from "react";

const FetchDataAxiosWithError = () => {
  const [data, setData] = useState([]);
  const [showError, setShowError] = useState("");
  const apiURL = "https://jsonplaceholder.typicode.com/posts";
  const handleDataFetch = async () => {
    try {
      const response = await axios.get(apiURL);
      setData(response.data);
    } catch (err) {
      console.log(err);
      setShowError(err.message);
    }
  };
  return (
    <>
      <h3>API data fetch using axios with error handling</h3>
      {!showError.length && (
        <button onClick={handleDataFetch}>Fetch data</button>
      )}
      {showError.length && <button onClick={handleDataFetch}>Retry</button>}
      {data.length &&
        data.map((item) => {
          return <li>{item.title}</li>;
        })}
      {showError}
    </>
  );
};
export default FetchDataAxiosWithError;
