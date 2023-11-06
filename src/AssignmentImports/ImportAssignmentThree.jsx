import { Link } from "react-router-dom";
import HomeQuesOne from "../Assignments/Assignment-3/Ques1/HomeQuesOne";
import WrapperPage from "../Assignments/Assignment-3/Ques2/WrapperPage";

const ImportAssignmentThree = () => {
  return (
    <>
      <h3 style={{ color: "blue" }}>Ques 1</h3>
      <HomeQuesOne />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 2</h3>
      <WrapperPage />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 3</h3>
      
      <Link to='/assignment-3/Ques-3' >Ques 3</Link>
      <hr />
      <h3 style={{ color: "blue" }}>Ques 4-5-6</h3>
    
      <Link to='/assignment-3/Ques-4'>Ques 4</Link>
    </>
  );
};

export default ImportAssignmentThree;
