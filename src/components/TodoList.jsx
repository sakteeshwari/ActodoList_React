import { useState } from "react"
import TodoItem from "./TodoItem"

const TodoList=(props)=>{

    var arrayVal=props.todoList
    var setArrayVal=props.settodoList

    return (
        <div className=" flex-grow bg-[#BDB4EA] p-3 rounded-md ">
        <h2 className=" text-xl font-semibold flex-grow">Today's Activity</h2>
        {
            arrayVal.length===0?<p>you haven't added anything yet</p>:""
        }
        
        {
            arrayVal.map((data,index)=>{

                // return <TodoItem indexing={index} activity={data}></TodoItem>

                return <TodoItem key={index} id={data.id} indexing={index+1} activity={data.activity} activityarr={arrayVal} setactivityarr={setArrayVal}></TodoItem>
            })
        }
       
      </div>
    )
}
export default TodoList