import React, { useState } from "react";
import Avatar from "./Avatar.tsx";
import testImg from "../images/midi-50.webp";

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
      picture: "team_member_1.jpg",
      name: "John Doe",
      position: "Software Engineer",
    },
    {
      picture: "team_member_1.jpg",
      name: "John Doe",
      position: "Software Engineer",
    },
    {
      picture: "team_member_1.jpg",
      name: "John Doe",
      position: "Software Engineer",
    },
    {
      picture: "team_member_1.jpg",
      name: "John Doe",
      position: "Software Engineer",
    },
    {
      picture: "team_member_1.jpg",
      name: "John Doe",
      position: "Software Engineer",
    },

    // Add more team members here...
  ];

  return (
    <div>
      {/* Icon */}
      {!showClipboard && (
      <button className="h-24 w-20 bg-gray-900 rounded" onClick={() => setShowClipboard(true)}>
        <div className="absolute w-1/3 left-1/2 transform -translate-x-1/2 h-2">
          <div className="absolute w-1/3 left-1/2 transform -translate-x-1/2 top-0 h-1/3 rounded-t-full bg-gray-400"></div>
          <div className="absolute w-full top-1/3 h-3/4 rounded-t-full bg-gray-400"></div>
        </div>
        <div className="flex items-center justify-center">
          <div className="m-2 h-20 w-16 bg-white flex justify-center">
            <p className="text-black text-sm">Komanda</p>
          </div>
        </div>
      </button>
      )}

      {/* Member list */}
      {showClipboard && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto no-scrollbar"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowClipboard(false);
          }
        }}>
          <div className="absolute top-0 bg-gray-900 rounded">
            <div className="absolute w-1/2 left-1/2 transform -translate-x-1/2 h-16">
              <div className="absolute w-1/3 left-1/2 transform -translate-x-1/2 top-0 h-1/3 rounded-t-full bg-gray-400"></div>
              <div className="absolute w-full top-1/3 h-3/4 rounded-t-full bg-gray-400"></div>
            </div>
            <div className="m-12 pt-8 bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-wrap justify-center">
                  {/* placeholder */}
                  <Avatar
                    className="basis-full md:basis-1/3 lg:basis-1/4"
                    name="Olen Račkauskas"
                    title="MIDI IT vadovas"
                    imgsrc={testImg}
                    phone="+370 64 622 318"
                    email="it@midi.lt"
                    placeholder={"blur"}
                    />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
