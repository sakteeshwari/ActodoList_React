import { useState } from "react"
import TodoList from "./TodoList"

const TodoForm=(props)=>{

  const [addValue,setaddValue]=useState("")

  var arrayVal=props.todoList
 var setArrayVal=props.settodoList

  const addList=(event)=>{
    setaddValue(event.target.value)
  }

  const add=()=>{
      setArrayVal([...arrayVal,{id:arrayVal.length+1,activity:addValue}])
      setaddValue("")
  }

    return (

        <div className="">
        <h2 className=" text-xl font-semibold">Manage Activities</h2>
        <input type="text" value={addValue} onChange={addList} className="border border-black my-5 focus:outline-none" style={{ padding: "3px" }} />
        <button type="button" onClick={add} className=" bg-black p-1 text-white">Add</button>
      </div>
    )
}
export default TodoForm