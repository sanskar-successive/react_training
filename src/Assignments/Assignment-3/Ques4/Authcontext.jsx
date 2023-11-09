import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginComment, setLoginComment] = useState("");
  const authenticateUser = () => {
    setIsLoggedIn(true);
  };
  const logoutUser = () => {
    setIsLoggedIn(false);
  };
  const setComment = (value) => {
    setLoginComment(value);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, authenticateUser, logoutUser, loginComment, setComment }}
    >
      {children}
    </AuthContext.Provider>
  );
};
