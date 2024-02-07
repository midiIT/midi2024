import { useNavigate } from "react-router-dom";
import Sponsors from "../components/sponsors/Sponsors.tsx";
// import corkboardImage from "../images/corkboard.jpg";

function Interactive() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {/* Corkboard Section */}
      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-[url(../images/corkboard.jpg)]">

        {/* Back Arrow */}
        <div className="absolute top-4 left-4">
          <button
            onClick={goBack}
            className="text-2xl p-2 hover:bg-gray-200 rounded-full"
          >
            ←
          </button>
        </div>
        
        <h1 className="text-5xl font-bold">Place for corkboard</h1>
      </div>

      {/* Sponsors Section */}
        <Sponsors/>
    </>
  );
}

export default Interactive;
