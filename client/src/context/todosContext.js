import { createContext } from "react";

const TodosContext=createContext({
    todos:[],
    setTodos:() => {},
    setLoading:() => {},
})

export default TodosContext