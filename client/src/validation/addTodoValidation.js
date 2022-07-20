import * as Yup from "yup";

const addTodoSchema = Yup.object().shape({
    title:Yup.string().min(2,'Enter at least 2 character!').required('please fill out the field!')
})

export default addTodoSchema