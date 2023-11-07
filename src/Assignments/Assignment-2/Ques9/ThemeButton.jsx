// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

import { useContext} from "react";
import { ThemeContext } from "./ThemeContext";
import "./ThemeSwitcher.css";

const ThemeButton = () => {
  const {theme,toggleTheme} = useContext(ThemeContext);


  return (
    <>
      <div className={`${ theme==='light' ? 'light' : 'dark'}`}>
        <h4>Theme Switcher</h4>
        <p>{theme}</p>
        <button onClick={toggleTheme}>Switch Theme</button>
      </div>
    </>
  );
};

export default ThemeButton;