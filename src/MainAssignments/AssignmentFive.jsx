import { Link } from "react-router-dom";
import {
  ApolloProvider1,
  ButtonExample,
  CustomModal,
  DataFetchWithErrorHandling,
  DataFetcher,
  FetchAndDisplayData,
  FetchDatWithLoading,
  FetchDataAxiosWithError,
  FetchDataUsingAxios,
  FetchLargeData,
  LogEvents,
  MyApolloProvider,
  PostRequestForm,
} from "../Assignments/Assignment-5";

const AssignmentFive = () => {
  return (
    <>
      <h3 style={{ color: "blue" }}>Ques 1</h3>
      <DataFetcher />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 2</h3>
      <DataFetchWithErrorHandling />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 3</h3>
      <FetchDatWithLoading />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 4</h3>
      <FetchLargeData />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 5</h3>
      <FetchDataUsingAxios />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 6</h3>
      <FetchDataAxiosWithError />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 7</h3>
      <PostRequestForm />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 8</h3>
      <ApolloProvider1 />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 9</h3>
      <MyApolloProvider />
      <h3 style={{ color: "blue" }}>Ques 12</h3>
      <ButtonExample />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 13</h3>
      <CustomModal />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 14</h3>
      <Link to="/assignment-5/Ques-14/">Ques 14</Link>
      <hr />
      <h3 style={{ color: "blue" }}>Ques 15</h3>
      <LogEvents />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 16</h3>
      <FetchAndDisplayData />
    </>
  );
};
export default AssignmentFive;
