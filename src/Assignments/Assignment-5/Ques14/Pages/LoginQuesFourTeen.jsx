import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import withAuth from "../withAuth";

const LoginQuesFourTeen = ({isAuth, setIsAuth})=>{
    const [user, setUser] = useState({name:"", password:""});
    // const [isLoggedIn, setIsLoggedIn] = useState(isAuth);
    const navigate = useNavigate();
    const handleLogin = ()=>{
        // setIsLoggedIn(true);
        setIsAuth(true);
        setUser({name:"", password:""});
        navigate('/assignment-5/Ques-14/')
    }

    return(
        <>
            <h3>Login page</h3>
            <input type="text" placeholder="Enter name" value={user.name} onChange={(e)=>setUser(e.target.value)} />
            <input type="password" placeholder="Enter password" value={user.password} onChange={(e)=>setUser(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <Link to='/assignment-5/Ques-14/'>Go to home</Link>
        </>
    )
}
export default withAuth(LoginQuesFourTeen);