

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Iogin"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import { useState } from "react"




const App=()=>{

 
  const [array, setArray] = useState([
      {
          username: "sakthi",
          password:"123"
      },
      {
        username: "kushi",
        password:"123"
      }
  ])

  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login array={array} setArray={setArray} />}></Route>
    <Route path="/signup" element={<Signup array={array} setArray={setArray} />}></Route>
    <Route path="/landing" element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}




export default App