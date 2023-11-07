import withDataFetching from "./withDataFetching";


const FetchAndDisplayData = ({ data, handleDataFetch }) => {
  console.log(data);
  // console.log(handleDataFetch);
  return (
    <>
      <h3>Fetch and display data using HOC</h3>
      <button onClick={handleDataFetch}>Fetch Data</button>
      {data.map((item) => {
        return (<li>{item.title}</li>);
      })}
    </>
  );
};
export default withDataFetching(FetchAndDisplayData);
