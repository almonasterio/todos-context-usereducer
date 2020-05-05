import React, {createContext, useReducer} from "react"
import todoReducer from "../reducer/todo.reducer"
import useTodoState from "../hooks/useTodoState"

const defaultTodos=[{id:1,task: "Mow the lawn",completed:false},{id:2, task: "Buy Soap",completed:false}]

export const TodosContext =createContext();

export function TodosProvider(props){
   // const {todos,addTodo,removeTodo,toogleTodo,editTodos}=useTodoState(defaultTodos);
    const [todos,dispatch] = useReducer(todoReducer,defaultTodos);
    return (
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )

}
