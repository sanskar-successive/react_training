// 2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

import { useState } from "react";

const PersonForm = () => {

  const [details, setDetails] = useState({});
  const handleFirstName = (e) => {
    setDetails({ ...details, firstName: e.target.value });
  };
  const handleLastName = (e) => {
    setDetails({ ...details, lastName: e.target.value });
  };
  const handleAge = (e) => {
    setDetails({ ...details, age: e.target.value });
  };
  
  return (
    <>
      <h4>Person form</h4>
      <input
        value={details.firstName}
        onChange={handleFirstName}
        type="text"
        placeholder="Enter Firstname"
      />
      <input
        value={details.lastName}
        onChange={handleLastName}
        type="text"
        placeholder="Enter Lastname"
      />
      <input
        value={details.age}
        onChange={handleAge}
        type="number"
        placeholder="Enter Age"
      />
      <p>Firstname : {details.firstName}</p>
      <p>Lastname : {details.lastName}</p>
      <p>Age : {details.age}</p>
    </>
  );
};
export default PersonForm;
