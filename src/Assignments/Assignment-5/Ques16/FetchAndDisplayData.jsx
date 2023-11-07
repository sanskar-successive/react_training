import withDataFetching from "./withDataFetching";

const FetchAndDisplayData = ({ data, handleDataFetch }) => {
    console.log(data);
  return (
    <>
      <h3>Fetch and display data using HOC</h3>
      <button>Fetch Data using HOC</button>
      {/* {data.map((item) => {
        return (<li>{item.title}</li>);
      })} */}
    </>
  );
};
export default withDataFetching(FetchAndDisplayData);
