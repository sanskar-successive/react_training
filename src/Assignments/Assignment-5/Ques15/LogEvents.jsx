// 15.Build an HOC called withLogger that logs the events of a component (e.g., mounting, unmounting, updating). 
// Apply this HOC to a component and display the logs in the browser console.

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