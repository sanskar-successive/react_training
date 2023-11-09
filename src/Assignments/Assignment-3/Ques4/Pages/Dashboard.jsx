import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <h3>Dashboard page</h3>
      <Link to="/assignment-3/Ques-4/">Go to Home</Link>
      <br/>
      <Link to="/assignment-3/Ques-4/dashboard/profile">Go to profile</Link>
      <br />
      <Link to="/assignment-3/Ques-4/dashboard/setting">Go to setting</Link>
      <Outlet />
    </>
  );
};
export default Dashboard;
