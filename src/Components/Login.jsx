// ---------------------------
// Required imports
// ---------------------------
import { Link, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";

// ---------------------------
// Code Begins
// ---------------------------
const Login = ({ onLogin }) => {
  const [user, setUser] = useState(() => "");
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    if (user === "") {
      alert("Please enter a username");
      return;
    }
    onLogin(user);
    navigate("/dashboard");
  }, [user, navigate, onLogin]);

  return (
    <div>
      <div className="flex flex-col justify-start items-start w-[350px] p-3 cursor-default text-main_text-light">
        <h1 className="text-[30px]">Welcome to Recipeek</h1>
        <p className="text-sm mt-1">Sign into your account</p>
        <label htmlFor="username" className="mt-7 text-sm">
          Enter Your Username
        </label>
        <input
          type="text"
          id="username"
          className="font-mono p-1 mt-2 w-9/12 bg-[#02020E] border-b-[1px] border-white focus:outline-none focus:border-border-b-light placeholder:text-[#FFE39C]/40"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button
          type="button"
          className="text-[#FFE39C] bg-[#1A1B26] hover:bg-[#1a1b26ab] p-3 mt-4 w-9/12 rounded-md shadow-sm shadow-[#584f32] text-sm"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="mt-4">
          Dont have an account?{" "}
          <Link to="/register" className="text-[#FFE39C] hover:text-[#d3ff0f]">
            Sign Up
          </Link>
        </p>
        <p className="mt-2">
          Remove after debugging:{" "}
          <Link to="/" className="text-[#FFE39C] hover:text-[#d3ff0f]">
            Landing Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
