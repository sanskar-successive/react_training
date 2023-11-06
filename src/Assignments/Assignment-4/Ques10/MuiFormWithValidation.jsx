// 10.Create a form with Material-UI text fields and implement form validation.
// Ensure that error messages are displayed when the user enters invalid data.

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { ValidateForm } from "./ValidateForm";

const MuiFormWithValidation = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [fieldError, setFieldError] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = ValidateForm(formFields);
    if (Object.keys(validationError).length === 0) {
      console.log(formFields);
    } else {
      setFieldError(validationError);
    }
  };

  return (
    <>
      <h3>Mui Form validation</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Name"
          variant="outlined"
          name="name"
          value={formFields.name}
          onChange={handleInputChange}
          helperText={fieldError.name}
        />
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          name="email"
          value={formFields.email}
          onChange={handleInputChange}
          helperText={fieldError.email}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          value={formFields.password}
          onChange={handleInputChange}
          helperText={fieldError.password}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
};
export default MuiFormWithValidation;
