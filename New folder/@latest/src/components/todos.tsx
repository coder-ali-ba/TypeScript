import React from 'react'
import { Todo, useTodos  } from '../Store/todos'

function Todos() {
    const {todos , handleComplete , handleDelete} =useTodos();
    let data = todos;
    
  return (
    <ul>
      {
        data.map((todo)=>{
            return <li key={todo.id}>
                <input type="checkbox" checked={todo.completed}  onChange={()=>handleComplete(todo.id)}/>
                <label htmlFor="">{todo.task}</label>
                {todo.completed && <button>Completed</button>}
                <button onClick={()=>handleDelete(todo.id)}>delete</button>
            </li>
        })
      }
    </ul>
  )
}

export default Todos
