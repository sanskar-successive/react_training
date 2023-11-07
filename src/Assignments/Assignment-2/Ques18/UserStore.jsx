import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const UserStore = () => {
  
  const { setUser, getUser, removeUser } = useLocalStorage();
  const [userInput, setUserInput] = useState({});
  const [username, setUsername] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handleSetUser = () => {
    setUser(userInput);
    setUserInput({ name: "", email: "" });
  };
  const handleGetUser = () => {
    console.log(getUser(username));
    setUsername("");
  };
  const handleRemoveUser = () => {
    removeUser(username);
    setUsername("");
  };

  return (
    <>
      <h4>User Storage</h4>
      <div>
        <h4>Set User</h4>
        <input
          name="name"
          value={userInput.name}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter username"
        />
        <input
          name="email"
          value={userInput.email}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter email"
        />
        <button onClick={handleSetUser}>Set User</button>
      </div>

      <div>
        <h4>Get or Remove User</h4>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter username"
        />
        <button onClick={handleGetUser}>Get user</button>
        <button onClick={handleRemoveUser}>Remove user</button>
      </div>
    </>
  );
};

export default UserStore;
