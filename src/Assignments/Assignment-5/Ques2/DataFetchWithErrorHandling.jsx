import { useState } from "react";

const DataFetchWithErrorHandling = () => {
  const [data, setData] = useState([]);
  const [showError, setShowError] = useState("");
  const apiURL = "https://jsonplaceholder.typicode.com/posts";
  const handleDataFetch = async () => {
    try{
        const response = await fetch(apiURL);
        if(!response.ok){
            throw new Error('some error occured');
        }
        const apiData = await response.json();
        setData(apiData);
    }
    catch(err){
        setShowError(err.message);
    }
  };

  return (
    <>
      <h3>API Data Fetch with error handling</h3>
      {!showError.length && (
        <button onClick={handleDataFetch}>Fetch data</button>
      )}
      {showError.length && <button onClick={handleDataFetch}>Retry</button>}
      {data.length &&
        data.map((item) => {
          return <li>{item.title}</li>;
        })}
      <h4>{showError}</h4>
    </>
  );
};
export default DataFetchWithErrorHandling;
