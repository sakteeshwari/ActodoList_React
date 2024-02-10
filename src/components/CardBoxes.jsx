const Cards = (props) => {






    return (
        <>
            <div className=' my-5 bg-red-400 text-center p-6 rounded flex-grow basis-3/6 md:basis-0' style={{ backgroundColor: props.bgcolor }}>
                <h2 className=" text-xl font-semibold">{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
        </>
    )
}
export default Cards