import * as Yup from "yup"

const regsiterSchema=Yup.object().shape({
    user: Yup.string().min(5,'Username must be more than 5 character!').required('Username is required!'),
    password: Yup.string().required('Password is required!')
    .matches(/(?=,*[a-z])/,'you must use at least on uppercaseletters, lowercase letters and one number')
    .matches(/(?=,*[A-Z])/,'you must use at least on uppercaseletters, lowercase letters and one number')
    .matches(/(?=,*[0-9])/,'you must use at least on uppercaseletters, lowercase letters and one number'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')],'Password must match').required('Re-Enter password is required!'),
}
)
const loginSchema=Yup.object().shape({
    user: Yup.string().min(5,'Username must be more than 5 character!').required('Username is required!'),
    password: Yup.string().required('Password is required!')
    .matches(/(?=,*[a-z])/,'you must use at least one uppercase letter, lowercase letter and one number')
    .matches(/(?=,*[A-Z])/,'you must use at least one uppercase letter, lowercase letter and one number')
    .matches(/(?=,*[0-9])/,'you must use at least one uppercase letter, lowercase letter and one number'),
})

export {regsiterSchema,loginSchema}