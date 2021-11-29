import { ADD_TODO, DELETE_TODO ,UPDATE_TODO , COMPLETE_TODO} from "../ActionsType/ActionTypes";
// import {todos} from "../../../data"

const initialState = {
todos: [
  {
    id:1,
    name: "Read a book",
    isDone: false,
},
{
    id:2,
    name: "Organize office",
    isDone: false,
},
{
    id:3,
    name: "Meet friends",
    isDone: true,
},
]
}

const ToDoReducers=( state = initialState ,{ type , payload })=>{
switch(type) {

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
    };

   

    case UPDATE_TODO:
        return {

          ...state,
          todos: state.todos.map((todo) =>
            todo.id === payload.id
              ? { ...todo, name: payload.name }
              : todo),
    };
      
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };

    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          (todo.id === payload) ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    
    
        default:
            return state;
        }
      };
      
      export default ToDoReducers;