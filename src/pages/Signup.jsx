import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
const Signup = (props) => {

    const [user, setUser] = useState()  //input user useState
    const [pass, setPass] = useState()  //input pass useState

    // 
    const earray = props.array
    const esetArray=props.setArray
    const navigate=useNavigate()
    // const [rounghUser,setRounghUser]=useState(true)

    const changeUsername = (evt) => {
        setUser(evt.target.value)

    }
    const changePassword = (evt) => {
        setPass(evt.target.value)

    }

    const addSigninAcc = () => {

        console.log(earray)

        esetArray([...earray,{username:user,password:pass}])
        navigate("/")
        // earray.forEach((item) => {
        //     if (item.username == user && item.password == pass) {
        //         console.log("successfull sigin")
        //     }
        //     else {
        //         console.log("Unsuccessfull sigin")

        //     }
        // })
    }

    return (
        <>
            <div className=" bg-black py-10 px-14 ">
                <div className=" bg-[#EFEFEF] flex flex-col p-5 rounded-md  ">
                    <h1 className=" text-3xl font-semibold">Hey Hi 👋 </h1>
                    <p className="mt-2">You can Sign up here :)</p>
                    <input type="text" placeholder="Username" value={user} onChange={changeUsername} className="  my-4 border border-gray-400 p-2 w-56 rounded-md bg-transparent focus:outline-none" />
                    <input type="text" placeholder="Password" value={pass} onChange={changePassword} className="  border border-gray-400 p-2 w-56 rounded-md bg-transparent focus:outline-none" />
                    <input type="text" placeholder="Confirm Password" className="  border border-gray-400 p-2 mt-4 w-56 rounded-md bg-transparent focus:outline-none" />
                    <button className=" bg-orange-500 p-1.5 w-24 mt-4 rounded-md" onClick={addSigninAcc}>Sign Up</button>
                    <p className="mt-3">Already have an account? <Link className=" underline" to={"/"}>Log in</Link></p>
                    {/* <Link to={"/"} className=" underline">Sign Up</Link> */}
                </div>
            </div>
        </>
    )
}

export default Signup