// 1.create two components: a parent component that acts as a provider and a child component that consumes the context.
// Create a context to manage a user's authentication status (logged in or out).
// Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
// Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."

import { useContext, useState } from "react";
import { AuthContext } from "./Parent";

const Child = () => {
  const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const handleLoginButton = () => {
    if(user.length) handleLogin();
  };
  const handleLogoutButton = () => {
    handleLogout();
    setUser("");
  };

  return (
    <>
      <h3>Auth System</h3>
      {isLoggedIn ? (
        <div>
          <p>Welcome {user}</p>
          <button onClick={handleLogoutButton}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please Login first</p>
          <input
            type="text"
            placeholder="Enter username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button onClick={handleLoginButton}>Login</button>
        </div>
      )}
    </>
  );
};

export default Child;
