import { useContext } from "react";
import { PreferenceContext } from "./PreferenceContext";

const PreferenceConsumer = () => {
  const { theme, switchTheme } = useContext(PreferenceContext);
  return (
    <>
      <div>
        <h3>User Preferences</h3>
        <p>{theme}</p>
        <button onClick={switchTheme}>Switch Theme</button>
      </div>
    </>
  );
};
export default PreferenceConsumer;
