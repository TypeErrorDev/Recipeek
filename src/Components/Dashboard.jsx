const Dashboard = ({ username, onLogout }) => {
  if (!username) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-400">Loading...</p>
      </div>
    );
  }
  return (
    <div className="p-6">
      <div className="w-full max-w-2xl mx-auto bg-[#1A1B26] rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-semibold text-white">
            Welcome, {username}!
          </h2>
          <button
            onClick={onLogout}
            className="px-4 py-2 text-sm text-[#FFE39C] bg-[#1A1B26] hover:bg-[#1a1b26ab] rounded-md shadow-sm shadow-[#584f32]"
          >
            Logout
          </button>
        </div>
        <div className="p-6">
          <p className="text-grey-400">Thank you for logging in!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
