export const ValidateForm = ({ name, email, password }) => {
  const validationError = {};
  if (name.trim().length === 0) {
    validationError.name = "Name is required";
  }
  if (name.trim().length > 0 && name.trim().length < 3) {
    validationError.name = "Name must be greater than 3 characters";
  }
  if (email.trim().length === 0) {
    validationError.email = "Email is required";
  }

  if (email.trim().length>0 && !/^\S+@\S+\.\S+$/.test(email)) {
    validationError.email = "Invalid email address";
  }

  if(password.length===0){
    validationError.password = 'Password is required';
  }
  if(password.length>0 && password.length<6){
    validationError.password = 'Password must be graeter than 6 characters';
  }

  return validationError;
};
