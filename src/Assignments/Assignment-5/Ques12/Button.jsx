import React from "react";
const Button = ({ styles, onClick, children }) => {
  const buttonStyle = {
    primary: {
      backgroundColor: "blue",
      color: "white",
    },
    secondary: {
      backgroundColor: "gray",
      color: "black",
    },
    danger: {
      backgroundColor: "red",
      color: "white",
    },
  };
  return (
    <>
      <button style={buttonStyle[styles]} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
export default Button;