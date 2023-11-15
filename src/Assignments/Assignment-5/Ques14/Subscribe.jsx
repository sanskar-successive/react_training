import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  const validToken = "1a2b3c";
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const handleSubscribe = () => {
    if (token === validToken) {
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
