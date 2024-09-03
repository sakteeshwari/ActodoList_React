import { useLocation } from "react-router-dom"
import Cards from "../components/CardBoxes";
import Header from "../components/Header";
import Todocontainer from "../components/TodoContainer";

function Landing()
{

      // array of objects for cards
  const array = [
    {
      head: 23,
      para: "Chennai",
      bg: "#8272DA"
    },
    {
      head: "20 December",
      para: "14:02:34",
      bg: "#FD6663"
    },
    {
      head: "Build Using",
      para: "React",
      bg: "#FCA201"
    }
  ]

    const data=useLocation()
    console.log(data)

    return(


        <div className="bg-teal-900 h-svh p-8 px-12">
        <div className="bg-[#EFEFEF] p-5  rounded-md">
        <Header name={data.state.euser}></Header>

        <div className=" flex gap-7 flex-wrap justify-center ">
          {
            array.map((data, index) => {
              return (

                <Cards key={index} title={data.head} bgcolor={data.bg} subtitle={data.para}></Cards>

                // another types adding array in cards

                // <Cards bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"}></Cards>
                // <Cards bgcolor={"#FD6663"} title={"20 December"} subtitle={"14:02:34"}></Cards>
                // <Cards bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"}></Cards>

              )
            })
          }
        </div>

        {/* todo Container */}
       <Todocontainer></Todocontainer>
      </div>
      </div>
    )
}
export default Landing