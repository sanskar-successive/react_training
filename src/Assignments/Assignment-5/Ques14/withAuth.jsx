import { useState } from "react";

const withAuth = (OriginalComponent)=>{
    const EnhancedComponent = ()=>{
        return(
            <OriginalComponent isAuth = "true" />
        )
    }
    return EnhancedComponent;
}
export default withAuth;