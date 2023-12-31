import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="text-center">
          <div className="text-white text-2xl font-bold">WELCOME TO</div>{" "}
          {/* Smaller text */}
          <div className="text-white text-5xl font-bold mb-5">
            MIDI 2024
          </div>{" "}
          {/* Larger text */}
          <p className="mb-5 text-white text-lg">Please select webpage type</p>
          <div className="flex justify-center gap-4">
            <Link
              className="bg-blue-500 text-white font-bold py-2 px-4 min-w-[120px] rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
              to="/interactive"
            >
              Interactive
            </Link>
            <Link
              className="bg-blue-500 text-white font-bold py-2 px-4 min-w-[120px] rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
              to="/static"
            >
              Static
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
