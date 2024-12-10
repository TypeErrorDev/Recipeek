// ---------------------------
// Required imports
// ---------------------------
import { Link } from "react-router-dom";

// ---------------------------
// Code Begins
// ---------------------------
const Nav = () => {
  return (
    <div className="flex md:flex-col justify-between md:justify-evenly items-center w-screen h-14 md:h-screen md:w-24 fixed top-0 left-0 bg-foreground-dark/95 px-4 md:py-10 text-[#FFE39C] z-50">
      <Link to="/dashboard">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFE39C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all transform hover:scale-125 hover:rotate-6 "
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </Link>
      <Link to="/search">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFE39C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all transform hover:scale-125 hover:rotate-6"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </Link>
    </div>
  );
};

export default Nav;
