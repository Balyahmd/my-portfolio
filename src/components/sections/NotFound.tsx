import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import FuzzyText from "../../animations/TextAnimations/FuzzyText";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/", { replace: false });
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
      <FuzzyText baseIntensity={0.2}>404</FuzzyText>
      <p className="text-lg mt-2">Oops! Page Not Found.</p>
      <button
        onClick={handleBack}
        className="mt-4 px-4 py-2 flex items-center gap-2 bg-red-700 text-white rounded-lg hover:bg-red-500 transition font-medium  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
        <IoArrowBack size={20} /> Back to Home
      </button>
    </section>
  );
};

export default NotFound;
