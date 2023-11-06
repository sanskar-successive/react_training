// 3.creat pages: Home and About.
// Implement routing using React Router DOM.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

import { Link } from "react-router-dom";

const HomeQuesThree = () => {
  
  return (
    <>
      <h3>Home page</h3>
      <Link to="/assignment-3/Ques-3/about">Go to about</Link>
    </>
  );
};

export default HomeQuesThree;
