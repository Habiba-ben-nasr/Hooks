import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from '../ToDItem/ToDoItem';

import "./todoList.css";
const ToDoList = ({ done, unDone }) => {

    const todosr = useSelector( state=> state.ToDoReducers.todos)
    
    return (

        // <div>
        //     <ul className="todo-list">
        //     {todosr.map(todo=> <ToDoItem todo ={todo} key={todo.id} /> )}
        //     </ul>

        // </div>
<div>
      {/* {todosr.map((todo) => (
        <ul className="todo-list"> <ToDoItem todo={todo} /> </ul> ))} */}

    <div className="todos-section">
      {done === unDone? todosr.map((todo) => (
            <ul className="todo-list"> <ToDoItem todo={todo} /> </ul>))
        : done
        ? todosr
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <ul className="todo-list">
                <ToDoItem todo={todo} />
              </ul>
            ))
        : todosr
            .filter((todo) => todo.isDone === false)
            .map((todo) => (
              <ul className="todo-list">
                <ToDoItem todo={todo} />
              </ul>
            ))}
 </div>
 </div>
    );


    
};

export default ToDoList
