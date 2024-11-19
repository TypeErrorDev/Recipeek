// ---------------------------
// Import components
// ---------------------------
import Featured from "./Featured";
import Nav from "./Nav";

// ---------------------------
// Code Begins
// ---------------------------
const Dashboard = ({ username }) => {
  if (!username) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-400">Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <Nav />
      <h1 className="text-4xl text-center text-[#FFE39C]">
        Welcome, {username}!
      </h1>
      <Featured />
    </div>
  );
};

export default Dashboard;
