export const ValidateForm = ({ name, email, password }) => {
  const validationError = {};
  if (name.trim().length) {
    validationError.name = "Name is required";
  }
  if (name.trim().length && name.trim().length < 3) {
    validationError.name = "Name must be greater than 3 characters";
  }
  if (email.trim().length) {
    validationError.email = "Email is required";
  }
  if (email.trim().length && !/^\S+@\S+\.\S+$/.test(email)) {
    validationError.email = "Invalid email address";
  }
  if (password.length) {
    validationError.password = "Password is required";
  }
  if (password.length && password.length < 6) {
    validationError.password = "Password must be graeter than 6 characters";
  }
  return validationError;
};
