import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImportAssignmentOne from "../AssignmentImports/ImportAssignmentOne";
import LandingPage from "../LandingPage";
import ImportAssignmentTwo from "../AssignmentImports/ImportAssignmentTwo";
import ImportAssignmentThree from "../AssignmentImports/ImportAssignmentThree";
import AboutQuesThree from "../Assignments/Assignment-3/Ques3/Pages/AboutQuesThree";
import HomeQuesFour from "../Assignments/Assignment-3/Ques4/Pages/HomeQuesFour";
import AboutQuesFour from "../Assignments/Assignment-3/Ques4/Pages/AboutQuesFour";
import LoginPage from "../Assignments/Assignment-3/Ques4/Pages/LoginPage";
import Dashboard from "../Assignments/Assignment-3/Ques4/Pages/Dashboard";
import Profile from "../Assignments/Assignment-3/Ques4/Pages/Profile";
import Setting from "../Assignments/Assignment-3/Ques4/Pages/Setting";
import ProductsList from "../Assignments/Assignment-3/Ques4/Pages/ProductsList";
import ProductDetail from "../Assignments/Assignment-3/Ques4/Pages/ProductDetail";
import PageNotFoundQuesFour from "../Assignments/Assignment-3/Ques4/Pages/PageNotFoundQuesFour";
import HomeQuesThree from "../Assignments/Assignment-3/Ques3/Pages/HomeQuesThree";
// import PageNotFoundQuesThree from "../Assignments/Assignment-3/Ques3/Pages/PageNotFoundQuesThree";
import { AuthProvider } from "../Assignments/Assignment-3/Ques4/Authcontext";

const AssignmentRoutes = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/assignment-1" element={<ImportAssignmentOne />} />

            <Route path="/assignment-2" element={<ImportAssignmentTwo />} />

            <Route path="/assignment-3" element={<ImportAssignmentThree />} />
            <Route path="/assignment-3/Ques-3" element={<HomeQuesThree />} />
            <Route
              path="/assignment-3/Ques-3/about"
              element={<AboutQuesThree />}
            />

            <Route path="/assignment-3/Ques-4" element={<HomeQuesFour />} />
            <Route
              path="/assignment-3/Ques-4/about"
              element={<AboutQuesFour />}
            />
            <Route path="/assignment-3/Ques-4/login" element={<LoginPage />} />
            <Route
              path="/assignment-3/Ques-4/dashboard"
              element={<Dashboard />}
            >
              <Route
                path="/assignment-3/Ques-4/dashboard/profile"
                element={<Profile />}
              />
              <Route
                path="/assignment-3/Ques-4/dashboard/setting"
                element={<Setting />}
              />
            </Route>
            <Route
              path="/assignment-3/Ques-4/products"
              element={<ProductsList />}
            />
            <Route
              path="/assignment-3/Ques-4/products/:id"
              element={<ProductDetail />}
            />
            <Route path="*" element={<PageNotFoundQuesFour />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};
export default AssignmentRoutes;
