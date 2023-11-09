import { useContext } from "react";
import AuthConsumer from "./AuthConsumer";
import PreferenceConsumer from "./PreferenceConsumer";
import { PreferenceContext } from "./PreferenceContext";
import './LandingPage.css'
import { DARK, LIGHT } from "./CONSTANTS";

const LandingPage = () => {
  const { theme } = useContext(PreferenceContext);
  return (
    <>
      <div className={`${ theme===LIGHT ? LIGHT : DARK}`}>
        <AuthConsumer />
        <PreferenceConsumer />
      </div>
    </>
  );
};
export default LandingPage;
