import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import { Navigate } from "react-router-dom"
const Login = (props) => {

    const [euser, setUser] = useState()
    const [epass, setPass] = useState()

    const [rounghUser, setRounghUser] = useState(true)
    const array = props.array
    // const setArray = props.setArray


    const navigate=useNavigate()



    const changeUsername = (evt) => {
        setUser(evt.target.value)

    }
    const changePassword = (evt) => {
        setPass(evt.target.value)
    }


    const handleLogin = () => {
        console.log(array)

        // if the user name and pass not find
       
        var usernotFound=false

        array.forEach(function (data) {
            if (data.username === euser && data.password === epass) {
                console.log("success")
                usernotFound=true
                navigate("/Landing",{state:{euser}})
            }
            // else {
            //     console.log("failed") 
            //     setRounghUser(false)
            // }
        })

        if (usernotFound === false) {
            console.log("unsuccessfull")
            setRounghUser(false)
        }
    }



    return (
        <>
            <div className=" bg-black py-10 px-14  ">
                <div className=" bg-[#EFEFEF] flex flex-col p-5  rounded-md ">
                    <h1 className=" text-3xl font-semibold">Hey Hi 👋 </h1>
                    {
                        rounghUser ? <p className="my-2">I help you manage your activities after you login :)</p> : <p className=" text-rose-600">correct the username and password !!</p>
                    }
                    <input type="text" placeholder="Username" value={euser} onChange={changeUsername} className="  my-4 border border-gray-400 p-2 w-56 rounded-md bg-transparent focus:outline-none" required/>
                    <input type="text" placeholder="Password" value={epass} onChange={changePassword} className="  border border-gray-400 p-2 w-56 rounded-md bg-transparent focus:outline-none" required/>
                    <button className=" bg-[#8272DA] p-1.5 w-24 mt-4 rounded-md hover:bg-[#a59adf]" onClick={handleLogin}>Login</button>
                    <p className="mt-3">Don't have an account? <Link className=" underline" to={"/Signup"}>Sign Up</Link></p>
                    {/* <Link to={"/"} className=" underline">Sign Up</Link> */}
                </div>
            </div>
        </>
    )
}

export default Login