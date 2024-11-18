// ---------------------------
// Import components
// ---------------------------
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
    </div>
  );
};

export default Dashboard;
