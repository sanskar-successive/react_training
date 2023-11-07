// 10.Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

import { createContext, useState } from "react";

export const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  
  const englishText = "Converting English to Spanish";
  const spanishText = "Convertir inglés a español";
  const [language, setLanguage] = useState(englishText);
  const switchLanguage = () => {
    if (language === englishText) setLanguage(spanishText);
    else setLanguage(englishText);
  };
  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
