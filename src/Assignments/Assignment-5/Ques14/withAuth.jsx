import React from 'react'

const withAuth = (OriginalComponent) => {
  
    const EnhancedComponent = ()=>{
        let isAuth = false;
        if(sessionStorage.getItem("paidUser")==1){
            isAuth = true;
        }

        return <OriginalComponent isAuth={isAuth}/>

    }
    return EnhancedComponent;
}

export default withAuth