import { Link } from "react-router-dom";

const LandingPage = ()=>{
    return(
        <>
            <Link to='/assignment-1' >Assignment-1</Link>  
            <br/>  
            <Link to='/assignment-2' >Assignment-2</Link>    
            <br/>
            <Link to='/assignment-3' >Assignment-3</Link>   
            <br/>
            <Link to='/assignment-4' >Assignment-4</Link>   
            <br/>
            <Link to='/assignment-5' >Assignment-5</Link>   
        </>
    )
}
export default LandingPage;