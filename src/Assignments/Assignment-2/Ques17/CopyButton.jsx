// 17.Build a custom hook named useClipboard for copying text to the clipboard.
// Implement a useClipboard hook that takes a text value as a parameter.
// Use the document.execCommand API to copy the provided text to the clipboard.
// Return a success status and methods to trigger the copying action.
// Develop a component that uses the useClipboard hook to provide a copy button for text.

import { useState } from "react";
import useClipboard from "./useClipboard";

const CopyButton = () => {
  
  const [text, setText] = useState("");
  const { copy, copyText, resetCopyButton } = useClipboard();
  const handleCopy = () => {
    copyText(text);
    setTimeout(resetCopyButton, 2000);
  };

  return (
    <>
      <h4>Copt to Clipboard</h4>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleCopy}>
        {copy ? <p>text copied</p> : <p>Copy to clipboard</p>}
      </button>
    </>
  );
};

export default CopyButton;
