import { Link } from "react-router-dom";
import ControlledComponent from "../Assignments/Assignment-4/Ques1/ControlledComponent";
import MuiFormWithValidation from "../Assignments/Assignment-4/Ques10/MuiFormWithValidation";
import ModalDailog from "../Assignments/Assignment-4/Ques11/ModalDailog";
import DataTable from "../Assignments/Assignment-4/Ques12/DataTable";
import YupAndFormikForm from "../Assignments/Assignment-4/Ques13/YupAndFormikForm";
import FormValidation from "../Assignments/Assignment-4/Ques14/FormValidation";
import FormData from "../Assignments/Assignment-4/Ques2/FormData";
import ControlledInputAndButton from "../Assignments/Assignment-4/Ques3/ControlledInputAndButton";
import FormPassword from "../Assignments/Assignment-4/Ques4/FormPassword";
import Dropdown from "../Assignments/Assignment-4/Ques5/Dropdown";
import TodoList from "../Assignments/Assignment-4/Ques6/Todolist";
import SearchFilter from "../Assignments/Assignment-4/Ques7/SearchFilter";
import TemperatureConverter from "../Assignments/Assignment-4/Ques8/TemperatureConverter";
import PageRoutes from "../Assignments/Assignment-4/Ques9/PageRoutes";

const ImportAssignmentFour = () => {
  return (
    <>
      <h3 style={{ color: "blue" }}>Ques 1</h3>
      <ControlledComponent />
      <hr />

      <h3 style={{ color: "blue" }}>Ques 2</h3>
      <FormData />
      <hr />

      <h3 style={{ color: "blue" }}>Ques 3</h3>
      <ControlledInputAndButton />
      <hr />

      <h3 style={{ color: "blue" }}>Ques 4</h3>
      <FormPassword />
      <hr />

      <h3 style={{ color: "blue" }}>Ques 5</h3>
      <Dropdown />
      <hr/>

      <h3 style={{ color: "blue" }}>Ques 6</h3>
      <TodoList />
      <hr />

      <h3 style={{ color: "blue" }}>Ques 7</h3>
      <SearchFilter />
      <hr />

      <h3 style={{ color: "blue" }}>Ques 8</h3>
      <TemperatureConverter />
      <hr />

      <h3 style={{ color: "blue" }}>Ques 9</h3>
      <Link to='/assignment-4/Ques-9'>Ques 9</Link>
      <hr/>

      <h3 style={{ color: "blue" }}>Ques 10</h3>
      <MuiFormWithValidation/>
      <hr/>

      <h3 style={{ color: "blue" }}>Ques 11</h3>
      <ModalDailog/>
      <hr/>

      <h3 style={{ color: "blue" }}>Ques 12</h3>
      <DataTable/>
      <hr/>

      <h3 style={{ color: "blue" }}>Ques 13</h3>
      <YupAndFormikForm/>
      <hr/>

      <h3 style={{ color: "blue" }}>Ques 14</h3>
      <FormValidation/>

    </>
  );
};
export default ImportAssignmentFour;