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
      <h1 className="text-4xl text-center mt-20 text-[#FFE39C]">
        Featured Recipes
      </h1>
      <Featured />
    </div>
  );
};

export default Dashboard;
