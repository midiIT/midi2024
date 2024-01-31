import corkboardImage from '../images/corkboard.jpg'

function Interactive() {
  return (
    <>
      {/* Corkboard Section */}
      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-[url(../images/corkboard.jpg)]">
        <h1 className="text-5xl font-bold">Place for corkboard</h1>
      </div>

      {/* Sponsors Section */}
      <div className="h-screen flex justify-center items-center bg-black">
        <h1 className="text-5xl font-bold text-white">Place for sponsors</h1>
      </div>
    </>
  );
}

export default Interactive;
