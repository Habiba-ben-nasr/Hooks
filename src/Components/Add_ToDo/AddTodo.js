import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../JS/Actions/Action'
import "./addTodo.css"



const AddTodo = () => {
const [textTodo,setTextTodo]=useState("");
const [todos,setTodos]=useState("");
const dispatch = useDispatch();


const submitToDO =(e)=>{

e.preventDefault();
const newTodo={
    name: textTodo,
    id: Math.random(),
    isDone:false,
};
setTodos([...todos, newTodo]);
dispatch(addTodo(newTodo))
setTextTodo("");
};
return(
<form className= "add-todo-form" onSubmit={submitToDO}>


<div className="input-container">
    
    <input 
    type="text" placeholder="Title..."
    value = {textTodo}
    onChange={(e)=>setTextTodo (e.target.value)}
    />
    <button className="my-btn btn-primary" onClick={submitToDO}>
        ADD
    </button>
</div>
</form>
);
};

export default AddTodo
