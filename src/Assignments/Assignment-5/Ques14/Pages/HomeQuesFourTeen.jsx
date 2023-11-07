import { Link } from "react-router-dom";
import withAuth from "../withAuth";

const HomeQuesFourTeen = ({isAuth}) => {
    return(
        <>
            <h4>Home page</h4>
            <Link to='/assignment-5/Ques-14/login' >Login</Link>
            <br/>
            <Link to={isAuth ? '/assignment-5/Ques-14/about' : '/assignment-5/Ques-14/login'} >About</Link>
            <br/>
            <Link to={isAuth ? '/assignment-5/Ques-14/dashboard' : '/assignment-5/Ques-14/login'} >Dashboard</Link>
        </>
    )
}
export default withAuth(HomeQuesFourTeen);