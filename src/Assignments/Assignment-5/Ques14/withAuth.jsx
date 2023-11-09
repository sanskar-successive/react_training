import { useState } from "react";

const withAuth = (OriginalComponent)=>{
    const EnhancedComponent = ()=>{

        const [isAuth, setIsAuth] = useState(false);
        return(
            <OriginalComponent isAuth={isAuth} setIsAuth={setIsAuth}/>
        )
    }
    return EnhancedComponent;
}
export default withAuth;