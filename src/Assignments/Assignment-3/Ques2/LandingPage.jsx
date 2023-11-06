import { useContext } from "react";
import AuthConsumer from "./AuthConsumer";
import PreferenceConsumer from "./PreferenceConsumer";
import { PreferenceContext } from "./PreferenceContext";
import './LandingPage.css'

const LandingPage = () => {
  const { theme } = useContext(PreferenceContext);
  return (
    <>
      <div className={`${ theme==='light' ? 'light' : 'dark'}`}>
        <AuthConsumer />
        <PreferenceConsumer />
      </div>
    </>
  );
};
export default LandingPage;
