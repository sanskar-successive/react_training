// 16.Develop an HOC named withDataFetching that fetches data from an API and passes 
// it as props to a component. Use this HOC to retrieve and display data in a component.

import withDataFetching from "./withDataFetching";

const FetchAndDisplayData = ({ data, handleDataFetch }) => {
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
