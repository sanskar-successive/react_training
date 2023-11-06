import { createContext, useState } from "react"

export const PreferenceContext = createContext();
export const PreferenceProvider = ({children})=>{
    const [theme, setTheme] = useState("light");
    const switchTheme = () => {
        if (theme === "light") setTheme("dark");
        else setTheme("light");
      };
    return(
        <PreferenceContext.Provider value={{ theme, switchTheme }}>
            {children}
        </PreferenceContext.Provider>
    )
}