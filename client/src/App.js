
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import './assets/bootstrap/style.css.map'

import Login from './components/Login';
import Register from './components/Register';

import Todos from './components/todos/Todos';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Navigate to={'/todos'} />} />
        <Route path='/todos' element={<Todos/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
  );
}

export default App;
