import TodosContext from "../../context/todosContext";
import {Formik,Form,Field} from "formik"
import {toast} from 'react-toastify'

import addTodoSchema from "../../validation/addTodoValidation";
import { addTodo } from "../../services/todosServices";
import { useContext } from "react";

const AddTodo = () => {

    const {setTodos,setLoading}=useContext(TodosContext);

    
    const submitForm=async(data) => {
        const token= localStorage.getItem("token");
        try {
            setLoading(true);
            const result=await addTodo(data,token)
            if(result.status===200){
                setTodos(draft=> {
                    draft.push(result.data)
                })
                setLoading(false);
                toast.success('todo added successfully',{icon:'👏🏻'})
            }
            
        }catch (err) {
            setLoading(false);
            console.log(err.response.data);
        }
    }

    return (
        <Formik 
        initialValues={{title:''}}
        validationSchema={addTodoSchema}
        onSubmit={(values) =>{
            submitForm(values);
            values=''
        }}
        >
        <Form className="d-flex justify-content-center mb-4">
            <div className="form-outline flex-fill">
                <Field
                    type="text"
                    name='title'
                    id="form3"
                    placeholder='Add whatever you want'
                    className="form-control form-control-lg"
                />

            </div>
            <button
                type="submit"
                className="btn btn-primary btn-lg ms-2"
                style={{ marginBottom: 40 }}
            >
                Add
            </button>
        </Form>
        </Formik>
    );
}

export default AddTodo;
