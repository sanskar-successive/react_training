import { Link } from "react-router-dom";
import {
  ControlledComponent,
  ControlledInputAndButton,
  DataTable,
  Dropdown,
  FormData,
  FormPassword,
  FormValidation,
  ModalDailog,
  MuiFormWithValidation,
  SearchFilter,
  TemperatureConverter,
  TodoList,
  YupAndFormikForm,
} from "../Assignments/Assignment-4";

const AssignmentFour = () => {
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
      <hr />
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
      <Link to="/assignment-4/Ques-9">Ques 9</Link>
      <hr />
      <h3 style={{ color: "blue" }}>Ques 10</h3>
      <MuiFormWithValidation />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 11</h3>
      <ModalDailog />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 12</h3>
      <DataTable />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 13</h3>
      <YupAndFormikForm />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 14</h3>
      <FormValidation />
    </>
  );
};
export default AssignmentFour;
