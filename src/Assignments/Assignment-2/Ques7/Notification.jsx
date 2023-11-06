// 7.Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.

import { useEffect, useState } from "react";

const Notification = () => {

  const [message, setMessage] = useState("");
  const [inputText, setInputText] = useState("");
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleOnSend = (e) => {
    setMessage(inputText);
    setInputText("");
  };
  useEffect(() => {
    let timeoutId;
    timeoutId = setTimeout(() => {
      setMessage("");
    }, 5000);

    return ()=>clearTimeout(timeoutId);
  }, [message]);
  
  return (
    <>
      <div>
        <input type="text" value={inputText} onChange={handleInputText} />
        <button onClick={handleOnSend}>Send</button>
        <p>Notification :  {message}</p>
      </div>
    </>
  );
};

export default Notification;
