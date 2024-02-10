import { useState } from "react"

const TodoItem = (props) => {

    // const [addingList,setAddingList]=useState()

    const activities=props.activityarr
    const setActivitiesarr=props.setactivityarr

   
    const deleteItem=(deleteid)=>{

    //    console.log(deleteid)
    var deletedItem=activities.filter((lists)=>{

       if(deleteid==lists.id)
       {
        return false
       } 
       else{
        return true
       }
    })

        setActivitiesarr(deletedItem)
        // setActivitiesarr([]) 
        
    }

    return (
        <>

            {/* <p className="mt-1">{props.indexing+1}. {props.data.activity}</p> */}

    <div className=" flex justify-between">
        
        <p className="mt-1">{props.indexing}. {props.activity}</p>
        <i className="fa-solid fa-trash-can text-xs bg-[#ff5656] p-1 float-end" onClick={()=>deleteItem(props.id)}
            style={{ color: "#f5f5f5", borderRadius: "50%", height: "24px", width: "18px" }}></i>
    </div>
        </>
    )
}
export default TodoItem
