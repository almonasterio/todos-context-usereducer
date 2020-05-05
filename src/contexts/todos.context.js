import React, {createContext} from 'react'
import useTodoState from "../hooks/useTodoState"

const defaultTodos=[{id:1,task: "Mow the lawn",completed:false},{id:2, task: "Buy Soap",completed:false}]

export const TodosContext =createContext();

export function TodosProvider(props){
   // const {todos,addTodo,removeTodo,toogleTodo,editTodos}=useTodoState(defaultTodos);
    const todosStuff = useTodoState(defaultTodos);
    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )

}
