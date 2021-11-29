import {ADD_TODO , DELETE_TODO , UPDATE_TODO, COMPLETE_TODO} from '../ActionsType/ActionTypes'


export const addTodo  =(payload)=>{
    return {
        type: ADD_TODO,payload};
}

export const updateTodo= (id, name)=>{
    return {
        type: UPDATE_TODO, payload:{id, name}};
}
export const deleteTodo = (payload) => {
    return { type: DELETE_TODO, payload };
  };
  
export const completeTodo = (payload) => {
    return { type: COMPLETE_TODO, payload };
  };