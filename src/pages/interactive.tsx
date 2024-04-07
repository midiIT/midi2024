import TeamSection from "../components/interactive/teamSection.tsx";
import EventSection from "../components/interactive/eventSection.tsx";
import Sponsors from "../components/interactive/sponsors/Sponsors.tsx";
import MIDILogo from "../images/interactive/MIDI-Logotipas.png";


function Interactive() {

  return (
    <>
      {/* Corkboard Section */}
      <div className="relative h-screen bg-cover bg-center bg-[url(../images/interactive/corkboard.jpg)]">
        {/* Logo Container */}
        <div className="flex justify-center pt-4">
          <img className="h-32 w-32" src={MIDILogo} alt="MIDI Logo"></img>
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
