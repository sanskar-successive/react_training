import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authcontext";

const HomeQuesFour = () => {
  const { isLoggedIn, logoutUser, loginComment, setComment } = useContext(AuthContext);
  const handleLogout = ()=>{
    logoutUser();
    setComment("");
  }
  return (
    <>
      <h3>Home page</h3>
      {isLoggedIn ? (
        <div>
          <h3>Welcome {loginComment}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <h3>Please login first</h3>
      )}
      <Link to={isLoggedIn ? "/assignment-3/Ques-4/about" : "/assignment-3/Ques-4/login"}>Go to about</Link>
      <br />
      <Link to="/assignment-3/Ques-4/login">User Login</Link>
      <br />
      <Link to={isLoggedIn ? "/assignment-3/Ques-4/dashboard" : "/assignment-3/Ques-4/login"}>Go to Dashboard</Link>
      <br />
      <Link to={isLoggedIn ? "/assignment-3/Ques-4/products" : "/assignment-3/Ques-4/login"}>Go to Products</Link>
    </>
  );
};

export default HomeQuesFour;
