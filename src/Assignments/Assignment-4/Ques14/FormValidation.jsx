import { useFormik } from "formik";
import FormSchema from "./FormSchema";
import { initialValues } from "./initials";

const FormValidation = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: FormSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <>
      <h3>Formik validation form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter username"
        />
        {errors.username && touched.username ? (
          <p style={{ color: "red" }}>{errors.username}</p>
        ) : null}
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter email"
        />
        {errors.email && touched.email ? (
          <p style={{ color: "red" }}>{errors.email}</p>
        ) : null}
        {(touched.username || touched.email) &&
        (errors.username || errors.email) ? (
          <button type="submit" disabled>
            Submit
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </>
  );
};
export default FormValidation;
