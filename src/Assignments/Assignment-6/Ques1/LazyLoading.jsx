import { Suspense, lazy } from "react";
const LazyComponent1 = lazy(() => import("./LazyComponent1"));
const LazyComponent2 = lazy(() => import("./LazyComponent2"));


const LazyLoading = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent1 />
        <LazyComponent2 />
      </Suspense>
    </>
  );
};
export default LazyLoading;