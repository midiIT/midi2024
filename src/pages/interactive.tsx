import { useState, MouseEvent } from "react";
import TeamSection from "../components/interactive/teamSection.tsx";
import EventSection from "../components/interactive/eventSection.tsx";
import Sponsors from "../components/interactive/sponsors/Sponsors.tsx";
import MIDILogo from "../images/interactive/MIDI-Logotipas.png";

function Interactive() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      setCursorPosition({ top: e.clientY - e.currentTarget.offsetTop, left: e.clientX - e.currentTarget.offsetLeft});
  };

  return (
    <>
      {/* Corkboard Section */}
      <div onMouseMove={onMouseMove} className="relative h-screen bg-cover bg-center bg-[url(../images/interactive/corkboard.jpg)]">
        {/* Logo Container */}
        <div className="flex justify-center pt-4">
          <img className="h-32 w-32" src={MIDILogo} alt="MIDI Logo"></img>
        </div>

        <EventSection/>
        {/* Team Icon in Bottom Right Corner */}
          <div className="flex flex-col absolute bottom-4 right-4 items-center">
            <TeamSection />
          </div>

        {/* Spotlight Effect */}
        <div style={{background: `radial-gradient(circle at ${cursorPosition.left}px ${cursorPosition.top}px, #00000000 10px, #000000ee 350px)`,
                    pointerEvents: `none`}} className="z-10 absolute inset-0 top-0 left-0"/>
      </div>

      {/* Sponsors Section */}
        <Sponsors/>
    </>
  );
}

export default Interactive;
