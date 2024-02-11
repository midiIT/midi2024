import { useNavigate } from "react-router-dom";
import corkboardImage from "../images/corkboard.jpg";

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
      </div>

      {/* Sponsors Section */}
      <div className="h-screen flex justify-center items-center bg-black">
      </div>
    </>
  );
}

export default Interactive;
