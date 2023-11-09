import { AuthProvider } from "./AuthContext";
import { PreferenceProvider } from "./PreferenceContext";
import LandingPage from "./LandingPage";

const WrapperPage = () => {
  return (
    <AuthProvider>
      <PreferenceProvider>
        <LandingPage />
      </PreferenceProvider>
    </AuthProvider>
  );
};
export default WrapperPage;
