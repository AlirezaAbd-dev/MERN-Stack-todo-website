import axios from 'axios'

const URL='http://localhost:3000'

//POST login by address http://localhost:3000/api/user/login
export const login=(user,password) =>{
return axios.post(`${URL}/api/user/login`,{user:user,password:password})
}

//POST register by address http://localhost:3000/api/user/register
export const register=(user,password) =>{
return axios.post(`${URL}/api/user/register`,{user:user,password:password})
}

//GET all todos by address http://localhost:3000/api/list/getList
export const getTodos=(token)=>{
return axios.get(`${URL}/api/list/getList`,{headers:{
    'x-auth-token': token
}})}

//POST one todo by address http://localhost:3000/api/list/addTodo
export const addTodo=(data,token)=>{
return axios.post(`${URL}/api/list/addTodo`,data,{
    headers:{
    'x-auth-token': token
}})}

//GET check or unCheck a todo by address http://localhost:3000/api/list/editTodo/:id
export const editTodo=(id,token)=>{
return axios.get(`${URL}/api/list/editTodo/${id}`,{
    headers:{
    'x-auth-token': token
}})}

//DELETE one todo by address http://localhost:3000/api/list/deleteTodo/:id
export const deleteTodo=(id,token)=>{
return axios.delete(`${URL}/api/list/deleteTodo/${id}`,{
    headers:{
    'x-auth-token': token
}})}