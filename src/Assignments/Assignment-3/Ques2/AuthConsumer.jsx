// 2.Extend the previous application to demonstrate the use of nested contexts.
// Create a new context to manage user preferences (e.g., theme preference).
// Modify the parent component to provide both the authentication and preferences contexts.
// Create a child component that consumes both contexts.
// Allow the user to change their theme preference (light/dark) using a button in the child component.
// Display the theme preference in the UI and adjust the component's styling accordingly.

import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthConsumer = () => {
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
      <div>
        <h3>Auth System</h3>
        {isLoggedIn ? (
          <div>
            <p>Welcome {user}</p>
            <button onClick={handleLogoutButton}>Logout</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Enter username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button onClick={handleLoginButton}>Login</button>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthConsumer;
