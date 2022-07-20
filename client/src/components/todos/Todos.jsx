import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useImmer } from 'use-immer'
import { ToastContainer} from 'react-toastify';

import { getTodos } from "../../services/todosServices"
import NotFound from "../NotFound"
import AddTodo from "./AddTodo"

import todosContext from "../../context/todosContext"

import Todo from "./Todo"
import Loading from "./Loading"


const Todos = () => {

    const [todos, setTodos] = useImmer([])
    const [loading, setLoading] = useImmer(false)
    const navigate = useNavigate()

    useEffect(() => {
        const action = async () => {
            try {

                const token = localStorage.getItem('token')
                if (!token) return navigate('/login')
                setLoading(true)
                const allTodos = await getTodos(token)
                setTodos(draft => draft = allTodos.data)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                if (err.response.status === 404) return navigate('/login')
            }
        }

        action()
    }, [])

    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }



    return (
        <todosContext.Provider value={{
            todos,
            setTodos,
            setLoading,
        }}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <section className="vh-100" style={{ backgroundColor: `#gray`, paddingTop: 100 }}>
                <i className="fa fa-sign-out signout" id="sign-out" title="log-out" onClick={logOut}></i>
                <div className="container py-5" style={{ minHeight: 300 }}>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: 15 }}>
                                <div className="card-body p-5">
                                    <h4 className="mb-3">Todo List Website</h4>
                                    <AddTodo />
                                    {loading ? <Loading /> : todos.length < 1 ? <NotFound /> : (
                                        <ul className="list-group mb-0">
                                            {todos.map((item, index) => {
                                                return (
                                                    <Todo key={index} data={item} />
                                                )
                                            })}
                                        </ul>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </todosContext.Provider>
    )
}

export default Todos