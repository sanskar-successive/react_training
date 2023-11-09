// 3.Create a component with controlled input field and a button. When the user enters a specific value into the input
// (e.g., "show"), a new component should be rendered below the input, displaying a message.
// Otherwise, nothing should be displayed.

import { useState } from "react";
import { AUTH } from "./constants";

const ControlledInputAndButton = () => {
  const [text, setText] = useState("");
  const [textToDisplay, setTextToDisplay] = useState("");
  const handleClick = () => {
    if (text.toLowerCase() === AUTH) {
      setTextToDisplay(text);
    } else {
      setTextToDisplay("");
    }
  };
  return (
    <>
      <h3>Controlled Input and Button</h3>
      <div>
        <input
          type="text"
          placeholder="Enter some text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
        <h4>{textToDisplay}</h4>
      </div>
    </>
  );
};

export default ControlledInputAndButton;
