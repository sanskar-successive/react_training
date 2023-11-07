import { createContext, useState } from "react"
import { DARK, LIGHT } from "./CONSTANTS";

export const PreferenceContext = createContext();
export const PreferenceProvider = ({children})=>{
    const [theme, setTheme] = useState(LIGHT);
    const switchTheme = () => {
        if (theme === LIGHT) setTheme(DARK);
        else setTheme(LIGHT);
      };
    return(
        <PreferenceContext.Provider value={{ theme, switchTheme }}>
            {children}
        </PreferenceContext.Provider>
    )
}