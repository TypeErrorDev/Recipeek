import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => false);
  const [username, setUsername] = useState(() => {
    const savedUsername = localStorage.getItem("username");
    return savedUsername ? savedUsername : "";
  });

  const handleLogin = (username) => {
    console.log("handleLogin");
    setUsername(username);
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    if (username) {
      setIsAuthenticated(true);
    }
  }, [username]);
  return (
    <div className="flex justify-center items-center h-screen bg-[#02020E] text-secondary_text-light font-mono">
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard username={username} />
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
