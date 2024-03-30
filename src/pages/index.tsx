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
              className="bg-gray-500 text-white font-bold py-2 px-4 min-w-[120px] rounded focus:outline-none focus:shadow-outline"
              type="button"
              to="/interactive"
              onClick={ (event) => event.preventDefault() }
              data-tooltip-target="tooltip-bottom"
              data-tooltip-placement="bottom"
            >
              Interactive
            </Link>
            <div id="tooltip-bottom" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Tooltip on bottom
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
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
