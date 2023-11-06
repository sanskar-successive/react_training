// 13.install  Yup. Define a Yup validation schema for a more complex form. 
// Include validation rules for fields like email, password, and phone number. 
// Ensure that error messages are displayed for each validation rule.
// Implement real-time validation feedback using Material-UI's TextField component. 
// Show validation errors as the user types, and clear the errors when the input is valid.(Use Formik as well)

import * as Yup from 'yup'

const YupFormSchema = Yup.object({
    firstName : Yup.string().min(3).max(15).required('firstname is required'),
    lastName : Yup.string(),
    email : Yup.string().email().required('email is required'),
    phone : Yup.number().min(1000000000).max(9999999999).required('phone number is required'),
    password : Yup.string().min(6).max(15).required('password is required'),
    confirm_password : Yup.string().required().oneOf([Yup.ref('password'),null], 'password must be same')
})
export default YupFormSchema;