// 14.Create a new form and Implement form submission handling. 
// Ensure that the form cannot be submitted if there are validation errors. 
// Display a summary of errors if the user attempts to submit an invalid form.

import * as Yup from 'yup'
const FormSchema = Yup.object({
    username : Yup.string().min(3).max(10).required('username is required'),
    email : Yup.string().email().required('email is required')
})
export default FormSchema;