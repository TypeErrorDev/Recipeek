// ---------------------------
// Required imports
// ---------------------------
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// ---------------------------
// Component Imports
// ---------------------------
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";
import Settings from "./Components/Settings";
import SearchForm from "./Components/SearchForm";
import ProductDetails from "./Components/ProductDetails";

// ---------------------------
// Code Begins
// ---------------------------
function App() {
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
    <div className="flex flex-col flex-wrap justify-center items-center min-h-screen bg-[#02020E] text-secondary_text-light font-mono">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
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
        <Route
          path="/settings"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <SearchForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ProductDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
