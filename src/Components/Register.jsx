// ---------------------------
// Required imports
// ---------------------------
import { Link, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";

// ---------------------------
// Code Begins
// ---------------------------
const Register = ({ onRegister }) => {
  const [username, setUsername] = useState(() => "");
  const navigate = useNavigate();

  const handleSignUp = useCallback(() => {
    if (!username) {
      alert("Please enter a username");
      return;
    }
    onRegister(username);
    navigate("/dashboard");
  }, [username, navigate, onRegister]);

  return (
    <div>
      <div className="flex flex-col justify-start items-start w-[350px] p-3 cursor-default text-main_text-light">
        <h1 className="text-[30px]">Welcome to Recipeek</h1>
        <p className="text-sm mt-1">Create your account</p>
        <label htmlFor="username" className="mt-7">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="font-mono p-1 w-9/12 bg-[#02020E] border-b-[1px] border-white focus:outline-none focus:border-border-b-light"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="button"
          className="text-[#FFE39C] bg-[#1A1B26] hover:bg-[#1a1b26ab] p-2 mt-4 w-9/12 rounded-md shadow-sm shadow-[#584f32]"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <p className="mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FFE39C] hover:text-[#d3ff0f]">
            Login
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

export default Register;
