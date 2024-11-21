import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-10 animate-[pulse_10s_ease-in-out_infinite] -scale-x-150 left-6">
          <svg
            viewBox="0 0 800 1200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <rect width="800" height="1200" fill="#02020E" />
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#1d1d21"
                strokeWidth="1"
                opacity="0.7"
              />
            </pattern>
            <rect width="800" height="1200" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-20 px-4">
          <div className="text-center pt-32 outline-dashed">
            <h1 className="text-warning-dark text-4xl font-bold">Cook with</h1>
            <h1 className="text-warning-dark text-4xl font-bold mb-4">
              Confidence
            </h1>
            <p className="text-tertiary_text-light text-xl mb-8 ">
              Join our community of food enthusiasts, discover recipes and share
              your uclinary creations!
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <button
              type="button"
              className="text-background-dark bg-[#FFE39C] hover:bg-[#1A1B26] hover:text-[#FFE39C] p-3 m-4 min-w-40 rounded-md shadow-sm shadow-[#584f32] text-md transition-all hover:scale-105"
              onClick={handleRegister}
            >
              Get Started
            </button>
            <button
              type="button"
              className="text-[#FFE39C] bg-[#1A1B26] hover:bg-[#1A1B26] hover:text-[#FFE39C] p-3  min-w-40 rounded-md shadow-sm shadow-[#584f32] text-md transition-all hover:scale-105"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="text-warning-dark flex justify-center items-center absolute z-20 mt-40 md:mt-0 h-16 w-screen bg-[#3e3724c6]">
        <h1 className="text-3xl">Why Choose Our Platform?</h1>
      </div>
    </>
  );
};

export default LandingPage;
