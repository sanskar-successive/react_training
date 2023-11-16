import { useEffect, useState } from "react";

const withLogger = (OriginalComponent) =>{
    const EnhancedComponent = (props)=>{
        const [count, setCount] = useState(0);
        const incCounter = ()=>{
            setCount(count+1);
        }
        useEffect(()=>{
            if(count===0) console.log('Component Mounts')
            else console.log('Component updates')
            return ()=>{
                console.log('Component Unmounts')
            }
        },[count])
        return <OriginalComponent {...props} count={count} incCounter={incCounter} />
    }
    return EnhancedComponent;
}
export default withLogger;