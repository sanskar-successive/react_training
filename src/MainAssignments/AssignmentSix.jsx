import { Counter, LazyLoading, LazyWithError, LoginForm, TestModal, UserProfile } from "../Assignments/Assignment-6";

const AssignmentSix = () => {
  return (
    <>
      <h3 style={{ color: "blue" }}>Ques 1</h3>
      <LazyLoading/>
      <hr />
      <h3 style={{ color: "blue" }}>Ques 2</h3>
      <LazyWithError/>
      <hr />
      <h3 style={{ color: "blue" }}>Ques 3</h3>
      <Counter />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 4</h3>
      <LoginForm />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 5</h3>
      <UserProfile name={"abc"} email={"abc@abc.com"} phone={123456} />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 6</h3>
      <TestModal/>
    </>
  );
};
export default AssignmentSix;
