import React, { useState } from "react";
import clipboardImage from "../images/team_clipboard.png";
import Avatar from "./Avatar.tsx";

interface TeamMember {
  picture: string;
  name: string;
  position: string;
}

const TeamSection: React.FC = () => {
  const [showClipboard, setShowClipboard] = useState(false);
  const teamMembers: TeamMember[] = [
    {
      picture: "team_member_1.jpg",
      name: "John Doe",
      position: "Software Engineer",
    },
    {
      picture: "team_member_2.jpg",
      name: "Jane Smith",
      position: "UI/UX Designer",
    },
    {
      picture: "team_member_1.jpg",
      name: "John Doe",
      position: "Software Engineer",
    },
    {
      picture: "team_member_2.jpg",
      name: "Jane Smith",
      position: "UI/UX Designer",
    },
    // Add more team members here...
  ];

  return (
    <div>
      <img
        src={clipboardImage}
        alt="Clipboard"
        onClick={() => setShowClipboard(!showClipboard)}
      />

      {showClipboard && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 grid grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-wrap justify-center">
                {/* placeholder */}
                <Avatar
                  className="basis-full md:basis-1/3 lg:basis-1/4"
                  name="Gabija Burokaitė"
                  title="MIDI vadovė"
                  imgsrc={clipboardImage}
                  phone="+370 68 353 981"
                  email="vadovas@midi.lt"
                  placeholder={"blur"}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
