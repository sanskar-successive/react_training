import { LanguageProvider } from "./LanguageContext";
import SwitchButton from "./SwitchButton";

const LanguageSwitcher = () => {
  
  return (
    <LanguageProvider>
      <SwitchButton />
    </LanguageProvider>
  );
};

export default LanguageSwitcher;
