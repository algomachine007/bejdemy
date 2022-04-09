// pages/dashboard.js

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Dashboard = ({ user }) => {
  return <p>Welcome {user.name}</p>;
};

export const getServerSideProps = withPageAuthRequired();

export default Dashboard;
