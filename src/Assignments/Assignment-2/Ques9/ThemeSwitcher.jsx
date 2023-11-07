import { useContext } from "react";
import ThemeButton from "./ThemeButton";
import { ThemeProvider } from "./ThemeContext";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  
  return (
    <>
      <ThemeProvider>
          <ThemeButton />
      </ThemeProvider>
    </>
  );
};

export default ThemeSwitcher;