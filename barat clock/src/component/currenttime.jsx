function Currenttime(){

    let time = new Date();
    return(
        <>
     <p className="lead">currenttime <br /> {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p> 
        </>
    )
}

export default Currenttime;