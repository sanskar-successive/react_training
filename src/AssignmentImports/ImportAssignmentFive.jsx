import DataFetcher from "../Assignments/Assignment-5/Ques1/DataFetcher";
import LoginForm from "../Assignments/Assignment-5/Ques14/Pages/Home";
import FetchAndDisplayData from "../Assignments/Assignment-5/Ques16/FetchAndDisplayData";
import DataFetchWithErrorHandling from "../Assignments/Assignment-5/Ques2/DataFetchWithErrorHandling";
import FetchDatWithLoading from "../Assignments/Assignment-5/Ques3/FetchDataWithLoading";
import FetchDataUsingAxios from "../Assignments/Assignment-5/Ques5/FetchDataUsingAxios";
import FetchDataAxiosWithError from "../Assignments/Assignment-5/Ques6/FetchDataAxiosWithError";
import PostRequestForm from "../Assignments/Assignment-5/Ques7/PostRequestForm";

const ImportAssignmentFive = ()=>{
    return (
        <>
            <DataFetcher/>
            <FetchDatWithLoading/>
            <FetchDataUsingAxios/>
            <PostRequestForm/>
            <DataFetchWithErrorHandling/>
            <FetchDataAxiosWithError/>
            <FetchAndDisplayData/>

            {/* <LoginForm/> */}
        </>
    )
}
export default ImportAssignmentFive;