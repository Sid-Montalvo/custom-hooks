

// import { useEffect, useReducer } from 'react'
// import { todoReducer } from '../08-useReducer/todoReducer';

import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";




const init = () => { 
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer,[], init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    


    const handleNewTodo = (todo) => {
      const action = {
        type: '[TODO] add Todo',
        payload: todo
      }

      dispatch(action);
    } 

    const handleRemoveTodo = (id) => {
      dispatch({
        type: '[TODO] remove Todo',
        payload: id
      })
    }

    const handleToggleTodo = (id) => {
      dispatch({
        type: '[TODO] toggle Todo',
        payload: id
      })

    }

    return {
        todos,
        todosCount: todos.length,
        todosPendingCount: todos.filter(todo=> !todo.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    }


}









































// const init = () => {
//     return JSON.parse(localStorage.getItem('todos')) || [];
//     }

// export const useTodo = () => {


//     const [todos, dispatch] = useReducer(todoReducer, [], init);

//     useEffect(() => {
//         localStorage.setItem('todos', JSON.stringify(todos) );
//       }, [todos])
      
  
//       const handleNewTodo = (todo) => {
//           const action = {
//               type: '[TODO] Add Todo',
//               payload: todo
//           }
  
//           dispatch(action);
//       }
  
//       const handleDeleteTodo = (id) => {
//           dispatch({
//               type: '[TODO] Remove Todo',
//               payload: id
//           })
//       }
  
//       const handleToggleTodo = (id) => {
//           dispatch({
//               type: '[TODO] Toggle Todo',
//               payload: id
//           })
//       }
//   return {
//     todos,
//     handleNewTodo,
//     handleDeleteTodo,
//     handleToggleTodo
    
//   }
// }
