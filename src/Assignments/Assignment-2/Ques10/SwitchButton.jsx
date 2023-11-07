import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
const SwitchButton = () => {
  const { language, switchLanguage } = useContext(LanguageContext);
  return (
    <>
      <div>
        <h4>Language Switcher</h4>
        <p>{language}</p>
        <button onClick={switchLanguage}>Switch Language</button>
      </div>
    </>
  );
};

export default SwitchButton;
