import { Link } from "react-router-dom";
import DataFetcher from "../Assignments/Assignment-5/Ques1/DataFetcher";
import LoginForm from "../Assignments/Assignment-5/Ques14/Pages/HomeQuesFourTeen";
import FetchAndDisplayData from "../Assignments/Assignment-5/Ques16/FetchAndDisplayData";
import DataFetchWithErrorHandling from "../Assignments/Assignment-5/Ques2/DataFetchWithErrorHandling";
import FetchDatWithLoading from "../Assignments/Assignment-5/Ques3/FetchDataWithLoading";
import FetchDataUsingAxios from "../Assignments/Assignment-5/Ques5/FetchDataUsingAxios";
import FetchDataAxiosWithError from "../Assignments/Assignment-5/Ques6/FetchDataAxiosWithError";
import PostRequestForm from "../Assignments/Assignment-5/Ques7/PostRequestForm";
import ApolloProvider1 from "../Assignments/Assignment-5/Ques8/ApolloProvider1";
import MyApolloProvider from "../Assignments/Assignment-5/Ques9/MyApolloProvider";
import CustomModal from "../Assignments/Assignment-5/Ques13/CustomModal";
import ButtonExample from "../Assignments/Assignment-5/Ques12/ButtonExample";
import FetchLargeData from "../Assignments/Assignment-5/Ques4/FetchLargeData";
import LogEvents from "../Assignments/Assignment-5/Ques15/LogEvents";

const ImportAssignmentFive = () => {
  return (
    <>
      <DataFetcher />
      <FetchDatWithLoading />
      <FetchDataUsingAxios />
      <PostRequestForm />
      <DataFetchWithErrorHandling />
      <FetchDataAxiosWithError />

      <FetchAndDisplayData />
      <br />

      <Link to="/assignment-5/Ques-14/">Ques 14</Link>

      <ApolloProvider1 />
      <MyApolloProvider />

      <CustomModal />
      <ButtonExample />

      <FetchLargeData />
      <LogEvents />
    </>
  );
};
export default ImportAssignmentFive;
