import React from 'react'
import "./todoItem.css"
import { completeTodo, deleteTodo } from "../JS/Actions/Action";
import { useDispatch } from "react-redux";
import EditModal from '../EditTodo/EditModal';

const ToDoItem = ({todo}) => {
    const dispatch = useDispatch();
    console.log(todo)
    return (
        

        <li className="todo-card" key={todo.id}>
           
           <span className="todo-text" style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
      onClick={()=> dispatch (completeTodo(todo.id))}>{todo.name}</span>
           
          
           
           <button className="btn-danger" onClick={()=> dispatch(deleteTodo({id : todo.id}))}> Delete </button>

         <EditModal todo={todo} />
        </li>
    );
}

export default ToDoItem
