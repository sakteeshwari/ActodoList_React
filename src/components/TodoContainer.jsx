import TodoForm from "./TodoInput"
import TodoList from "./TodoList"
import { useState } from "react"

const Todocontainer=()=>{
    const [todoList,settodoList]=useState([
        {
            id:12,
            activity:"Go for a Walk"
        },
        {
            id:15,
            activity:"Have a Breakfast"
        },
        {
            id:18,
            activity:"Take a shower"
        }
    ])
    return (
        <>
         <div className="flex gap-5 flex-wrap ">
         <TodoForm todoList={todoList} settodoList={settodoList}></TodoForm>

        <TodoList todoList={todoList} settodoList={settodoList}></TodoList>
        </div>
        </>
    )
}
export default Todocontainer