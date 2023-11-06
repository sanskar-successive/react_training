import { useFormik } from "formik";
import YupFormSchema from "./YupFormSchema";
import { TextField, Button } from "@mui/material";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
};

const YupAndFormikForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: YupFormSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <>
      <h3>Form using Yup and Formik</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          label="firstName"
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
        />
        {errors.firstName && touched.firstName ? (
          <p style={{ color: "red" }}>{errors.firstName}</p>
        ) : null}
        <TextField
          label="lastName"
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
        />
        <TextField
          label="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
        />
        {errors.email && touched.email ? (
          <p style={{ color: "red" }}>{errors.email}</p>
        ) : null}
        <TextField
          label="phone number"
          type="number"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
        />
        {errors.phone && touched.phone ? (
          <p style={{ color: "red" }}>{errors.phone}</p>
        ) : null}
        <TextField
          label="password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
        />
        {errors.password && touched.password ? (
          <p style={{ color: "red" }}>{errors.password}</p>
        ) : null}
        <TextField
          label="confirm password"
          type="password"
          name="confirm_password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
        />
        {errors.confirm_password && touched.confirm_password ? (
          <p style={{ color: "red" }}>{errors.confirm_password}</p>
        ) : null}
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
};
export default YupAndFormikForm;
