import withLogger from "./withLogger";

const LogEvents = (props)=>{  
    return(
        <>
            <h3>{props.count}</h3>
            <button onClick={props.incCounter}>Log events</button>
        </>
    )
}
export default withLogger(LogEvents);