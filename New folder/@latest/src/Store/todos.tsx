import { createContext, ReactNode, useContext, useState } from "react";


export type TodosProviderPrpos ={
   children : ReactNode
}

export type Todo ={
    id :string;
    task : string;
    completed :boolean;
    createdAt :Date
}

export type TodosContext ={
    todos : Todo[];
    handleAddTodo : (task : string)=> void;
    handleComplete : (id : string) => void;
    handleDelete : (id : string) => void
}

export const todosContext =createContext<TodosContext | null >(null)

export const TodosProvider = ({children} : TodosProviderPrpos) =>{
    const [todos , setTodos] =useState<Todo[]>([])

     const handleAddTodo = (task :string) =>{
        setTodos((prev)=>{
            const newTodos:Todo[] =[{
                id : Math.random().toString(),
                task : task,
                completed:false,
                createdAt:new Date()

            },
            ...prev
        ]       
        return newTodos
    })    
    }

    const handleComplete = (id : string)=>{
         setTodos((prev)=>
            prev.map(todo =>
            todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
            )
         )
    }

    const handleDelete = (id : string) =>{
       setTodos(todos.filter((todo)=>{
        return todo.id !== id
       }))
    }

 return <todosContext.Provider value={{todos , handleAddTodo , handleComplete , handleDelete}}>
    {children}
  </todosContext.Provider>
}


export const useTodos =()=>{
    const todosComsumer = useContext(todosContext);
    if(!todosComsumer){
        throw new Error ("Cotext Outside the Provider")
    }

    return todosComsumer
}