import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AssignmentFive,
  AssignmentFour,
  AssignmentOne,
  AssignmentThree,
  AssignmentTwo,
} from "../MainAssignments";
import {
  AboutQuesFour,
  Dashboard,
  HomeQuesFour,
  LoginPage,
  PageNotFoundQuesFour,
  ProductDetail,
  ProductsList,
  Profile,
  Setting,
} from "../Assignments/Assignment-3/Ques4";
import LandingPage from "../LandingPage";
import { AuthProvider } from "../Assignments/Assignment-3/Ques4/Authcontext";
import {
  AboutQuesNine,
  DashboardQuesNine,
  HomeQuesNine,
  ProfileQuesNine,
} from "../Assignments/Assignment-4/Ques9";
import { AboutQuesThree, HomeQuesThree } from "../Assignments/Assignment-3/Ques3";
import { PublicComponent } from "../Assignments/Assignment-5";
import Subscribe from "../Assignments/Assignment-5/Ques14/Subscribe";

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
            <Route path="/assignment-3/Ques-3/" element={<HomeQuesThree />} />
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
            <Route path="/assignment-4" element={<AssignmentFour />} />
            <Route path="/assignment-4/Ques-9" element={<HomeQuesNine />} />
            <Route
              path="/assignment-4/Ques-9/about"
              element={<AboutQuesNine />}
            />
            <Route
              path="/assignment-4/Ques-9/dashboard"
              element={<DashboardQuesNine />}
            />
            <Route
              path="/assignment-4/Ques-9/profile"
              element={<ProfileQuesNine />}
            />
            <Route path="/assignment-5" element={<AssignmentFive />} />
            <Route
              path="/assignment-5/Ques-14/"
              element={<PublicComponent />}
            />
            <Route
              path="/assignment-5/Ques-14/subscribe"
              element={<Subscribe />}
            />
            <Route path="/assignment-6/" element={<AssignmentSix/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};
export default AssignmentRoutes;
