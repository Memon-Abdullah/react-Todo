import React, { useState, useEffect }  from "react";
import { Header } from "./components/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from  './components/Form';
import { TodoList } from "./components/TodoList";
import '../src/App.css';



const App = ()=> {

  const initialStorage = JSON.parse(localStorage.getItem("todos")) || [];
  const [input , setInput] = useState('');
  const [todos, setTodos] = useState(initialStorage);
  const [editTodo, setEditTodo] = useState(null);
  
 useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos));
 },[todos])   
  
  
  return (
    <div className="container">
      <div className="app-wraper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos = {setTodos}
            editTodo = {editTodo}
            setEditTodo = {setEditTodo}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos = {setTodos} setEditTodo = {setEditTodo} />
        </div>
      </div>  
    </div> 
  );
}

export default App;
