// 1.Create a React application that has multiple pages represented as components. 
// Implement lazy loading for these components using React's lazy and Suspense features. 
// When a user navigates to a particular page, the component should be loaded lazily, 
// improving the application's initial loading time.

import React from 'react'
const LazyComponent1 = () => {
  return (
    <>
        <h3>Lazy component 1, will take time to load</h3>
    </>
  )
}
export default LazyComponent1