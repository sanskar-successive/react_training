import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "./authToken";

const Subscribe = () => {

  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const handleSubscribe = () => {
    if (token === AUTH_TOKEN) {
      sessionStorage.setItem("paidUser", 1);
      setToken("");
      navigate("/assignment-5/Ques-14/");
    }
    else{
        setToken("")
        navigate('/assignment-5/Ques-14/subscribe')
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </>
  );
};

export default Subscribe;
