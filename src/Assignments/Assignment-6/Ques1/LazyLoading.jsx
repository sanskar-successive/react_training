import { Suspense, lazy } from "react";
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const LazyLoading = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Home />
        <About />
        <Contact />
      </Suspense>
    </>
  );
};
export default LazyLoading;