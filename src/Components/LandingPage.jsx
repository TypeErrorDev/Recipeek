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
      <div className="w-full min-h-screen overflow-hidden">
        <div className=" px-4">
          <div className="text-center pt-32">
            <h1 className="text-warning-dark text-4xl font-bold">Cook with</h1>
            <h1 className="text-warning-dark text-4xl font-bold mb-4">
              Confidence
            </h1>
            <p className="text-tertiary_text-light text-xl mb-8">
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
              className="text-[#FFE39C] bg-[#1A1B26] hover:bg-[#1A1B26] hover:text-[#FFE39C] p-3 min-w-40 rounded-md shadow-sm shadow-[#584f32] text-md transition-all hover:scale-105"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
