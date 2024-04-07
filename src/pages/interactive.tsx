import { useNavigate } from "react-router-dom";
import TeamSection from "../components/TeamSection";
import EventSection from "../components/eventSection";
import Sponsors from "../components/sponsors/Sponsors.tsx";
import MIDILogo from "../images/MIDI-Logotipas.png";
import TeamIcon from "../images/team_clipboard.png";


function Interactive() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {/* Corkboard Section */}
      <div className="relative h-screen bg-cover bg-center bg-[url(../images/corkboard.jpg)]">
        {/* Logo Container */}
        <div className="flex justify-center pt-4">
          <img className="h-32 w-32" src={MIDILogo} alt="MIDI Logo"></img>
        </div>

        <div className="flex items-center justify-center h-full">
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

        <EventSection/>

        {/* Team Icon in Bottom Right Corner */}
          <div className="flex flex-col absolute bottom-4 right-4 items-center">
            <TeamSection />
          </div>
      </div>

      {/* Sponsors Section */}
        <Sponsors/>
    </>
  );
}

export default Interactive;
