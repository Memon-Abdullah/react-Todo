
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


export const Form = ({ input , setInput, todos, setTodos, editTodo, setEditTodo })=>{
    const change = (event)=> {
        setInput(event.target.value);
    };
    const Summition = (event)=>{
        event.preventDefault();

        if(!editTodo){
            setTodos([...todos,{ id: uuidv4(), title: input, completed: false}]);
            setInput('');
        }
        else{
            updateTodo(input,editTodo.id, editTodo.completed)
        }
    };
    // function updateTodo(title, id, completed){
    //     let newArray = [...todos];
    //     for(let i=0;i<newArray.length;i++){
    //         if(newArray[i].id === id){
    //             newArray[i]={ ...newArray[i], title: title, completed: !completed};
    //         }
    //     }
    //     setTodos(newArray);
    //     setEditTodo({});
    // }
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => {
            return todo.id === id ? { title, id, completed } : todo;
        });
        setTodos(newTodo);
        setEditTodo("");
    };
    
    useEffect( ()=>{
        if(editTodo){
            setInput(editTodo.title);
        }
        else{
            setInput("");
        }
    },[setInput,editTodo]);

    // const Summition = ()=>{
    //     if(!todos.includes(input)){
    //         setTodos([...todos, input]);
    //         setInput("");
    //     }else{
    //         alert('This todo already exists');
    //     }
    // };
    
    return(
        <>
        <form onSubmit={Summition}>
            <input type="text" placeholder="add your plane" value= { input } required className="task-input rounded p-1" onChange={change}/>
            <button className="button-add ms-2 "  type="submit">
                {editTodo ? "OK" : "Add"}
            </button>
            
        </form>
        </>
    )
}