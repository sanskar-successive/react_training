import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AssignmentOne,
  AssignmentThree,
  AssignmentTwo,
} from "../MainAssignments";
import { HomeQuesFour, HomeQuesThree } from "../Assignments/Assignment-3";
import { AboutQuesThree } from "../Assignments/Assignment-3/Ques3/Pages";
import {
  AboutQuesFour,
  Dashboard,
  LoginPage,
  PageNotFoundQuesFour,
  ProductDetail,
  ProductsList,
  Profile,
  Setting,
} from "../Assignments/Assignment-3/Ques4";
import LandingPage from "../LandingPage";
import { AuthProvider } from "../Assignments/Assignment-3/Ques4/Authcontext";

const AssignmentRoutes = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/assignment-1" element={<AssignmentOne />} />

            <Route path="/assignment-2" element={<AssignmentTwo />} />

            <Route path="/assignment-3" element={<AssignmentThree />} />
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
