// 4.Build a registration form with two password fields. Implement controlled components for both password inputs.
// Add a validation rule to ensure that the two passwords match before allowing the form submission.

import { useState } from "react";

const FormPassword = () => {
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [comment, setComment] = useState("");
  const handlePasswordOneChange = (event) => {
    setPasswordOne(event.target.value);
    setComment("");
  };
  const handlePasswordTwoChange = (event) => {
    setPasswordTwo(event.target.value);
    setComment("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(passwordOne, passwordTwo);
    if (passwordOne.length || passwordTwo.length) {
      setComment("Please fill the required fields");
    } else if (
      passwordOne.length &&
      passwordTwo.length &&
      passwordOne !== passwordTwo
    ) {
      setComment("Please re-enter the password correctly");
    } else {
      setComment("form successfully submitted");
      setPasswordOne("");
      setPasswordTwo("");
    }
  };
  return (
    <>
      <h3>Form Password</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter Password"
          value={passwordOne}
          onChange={handlePasswordOneChange}
        />
        <input
          type="password"
          placeholder="Re-Enter Password"
          value={passwordTwo}
          onChange={handlePasswordTwoChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{comment}</p>
    </>
  );
};

export default FormPassword;
