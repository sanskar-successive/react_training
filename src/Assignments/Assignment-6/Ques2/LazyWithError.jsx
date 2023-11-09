import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const QuestionTwo = () => {
  return (
    <>
    <ErrorBoundary fallback={<div>Have Some Errors</div>}>
      <Suspense fallback={<div>Loading</div>}>
        <Home />
        <About />
        <Contact/>
      </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default QuestionTwo;