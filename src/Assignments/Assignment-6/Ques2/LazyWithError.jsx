import { Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";
const LazyComponent1 = lazy(() => import("../Ques1/LazyComponent1"))
const LazyComponent2 = lazy(() => import("../Ques1/LazyComponent2"))

const LazyWithError = () => {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<p>Something went wrong</p>}>
          <LazyComponent1 />
          <LazyComponent2 />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default LazyWithError;
