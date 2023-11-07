import { useState } from "react";

const withAuth = (OriginalComponent)=>{
    const EnhancedComponent = ()=>{
        const [isAuth, setIsAuth] = useState(true);
        
        
        return(
            <OriginalComponent isAuth = {isAuth} />
        )
    }
    return EnhancedComponent;
}
export default withAuth;