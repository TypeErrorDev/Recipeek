import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";

function App() {
  // Initialize isAuthenticated based on whether username exists in localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedUsername = localStorage.getItem("username");
    return Boolean(savedUsername);
  });

  const [username, setUsername] = useState(() => {
    const savedUsername = localStorage.getItem("username");
    return savedUsername || "";
  });

  const handleLogin = (username) => {
    setUsername(username);
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUsername("");
    setIsAuthenticated(false);
    localStorage.removeItem("username");
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#02020E] text-secondary_text-light font-mono">
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard username={username} onLogout={handleLogout} />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={<Register onRegister={handleLogin} />}
        />
      </Routes>
    </div>
  );
}

export default App;
