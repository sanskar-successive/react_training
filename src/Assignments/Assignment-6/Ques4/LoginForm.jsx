import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsSubmitted(true);
    setUser({username:"", password:""})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          data-testid="username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          data-testid="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
        <button data-testid="submitBtn" type="submit">
          submit
        </button>
      </form>

      {isSubmitted && <p>Login successful</p>}

    </>
  );
};
export default LoginForm;
