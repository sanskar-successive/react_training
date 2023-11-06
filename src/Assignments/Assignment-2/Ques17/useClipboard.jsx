import { useState } from "react";

const useClipboard = (text) => {
    
  const [copy, setCopy] = useState(false);
  const copyText = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setCopy(true);
    } catch (err) {
      console.log("Some error occured in copy action", err);
    }
    document.body.removeChild(textArea);
  };
  const resetCopyButton = () => {
    setCopy(false);
  };

  return { copy, copyText, resetCopyButton };
};
export default useClipboard;
