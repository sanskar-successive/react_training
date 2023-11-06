import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authcontext";

const LoginPage = () => {
  
  const adminUser = { username: "Sanskar", password: "12345" };
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const { authenticateUser, loginComment, setComment } =
    useContext(AuthContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      user.username === adminUser.username &&
      user.password === adminUser.password
    ) {
      authenticateUser();
      setComment(user.username);
      navigate("/assignment-3/Ques-4/");
    } else {
      if (user.username === "" || user.password === "")
        setComment("Please fill the required fields");
      else setComment("you are not authenticated");
    }
  };
  return (
    <>
      <h3>Login page</h3>
      <form onSubmit={handleLogin}>
        <input
          name="username"
          value={user.username}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter username"
        />
        <input
          name="password"
          value={user.password}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter password"
        />
        <button type="submit">Login</button>
      </form>
      <p>{loginComment}</p>
    </>
  );
};

export default LoginPage;
