import React, { useState } from "react";
import './App.css';
import AddTodo from './Components/Add_ToDo/AddTodo';
import FilterTodo from "./Components/FilterTodo/FilterTodo";
import ToDoList from './Components/ToDoList/ToDoList';

function App() {
  // const [status, setStatus] = useState("all");
  const [done, setDone] = useState(false);
  const [unDone, setUndone] = useState(false);

  return (

    <div className="App" >
     <h1 style={{height:"50px", backgroundColor:"#6F4C5B" , color:"#000000" ,letterSpacing:"5px" , wordSpacing:"10px"}}>My To Do List</h1>
     <AddTodo/>

     <ToDoList done={done} unDone={unDone} />

     <div style={{ textAlign: "center" }}>
        <FilterTodo setDone={setDone} setUndone={setUndone} />
      </div>

    </div>
  );
}

export default App;
