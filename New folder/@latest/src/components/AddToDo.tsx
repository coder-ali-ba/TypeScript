import React, { useState } from 'react'
import { useTodos } from '../Store/todos'
import Todos from './todos';

function AddToDo() {
    const [todo , setTodo] = useState("")
    const {handleAddTodo} =useTodos();
    const handleFormSubmit = (e:React.SubmitEvent<HTMLElement>) => {
      e.preventDefault()
      handleAddTodo(todo);

      setTodo("")
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
            <button type="submit" disabled={todo===""}>Add</button>
        </form>
        <Todos />
      
    </div>
  )
}

export default AddToDo
