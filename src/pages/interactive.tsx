import { useNavigate } from "react-router-dom";
import TeamSection from "../components/TeamSection";
import MIDILogo from "../images/MIDI-Logotipas.png";
import TeamIcon from "../images/team_clipboard.png";

function Interactive() {
  const navigate = useNavigate();

  return (
    <>
      {/* Corkboard Section */}
      <div className="relative h-screen bg-cover bg-center bg-[url(../images/corkboard.jpg)]">
        {/* Logo Container */}
        <div className="flex justify-center pt-4">
          <img className="h-32 w-32" src={MIDILogo} alt="MIDI Logo"></img>
        </div>

        {/* Team Icon in Bottom Right Corner */}
          <div className="flex flex-col absolute bottom-4 right-4 items-center">
            <TeamSection />
          </div>
      </div>

      {/* Sponsors Section */}
      <div className="h-screen flex justify-center items-center bg-black"></div>
    </>
  );
}

export default Interactive;
