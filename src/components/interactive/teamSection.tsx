import React, { useEffect, useState } from "react";

import '../../styles/main.css';

import Avatar from "./Avatar.tsx";
import ForwardArrow from '@material-symbols/svg-400/outlined/arrow_forward_ios-fill.svg';
import BackArrow from '@material-symbols/svg-400/outlined/arrow_back_ios-fill.svg';

import Augustina from "../../images/interactive/team/augustina.webp";
import Darius from "../../images/interactive/team/darius.webp";
import Gytis from "../../images/interactive/team/gytis.webp";
import Domas from "../../images/interactive/team/domas.webp";
import Rokas from "../../images/interactive/team/rokas.webp";
import Augustas from "../../images/interactive/team/augustas.webp";
import Olen from "../../images/interactive/team/olen.webp";
import Titas from "../../images/interactive/team/titas.webp";
import Vaiva from "../../images/interactive/team/vaiva.webp";
import MantasG from "../../images/interactive/team/mantasG.webp";
import Nojus from "../../images/interactive/team/nojus.webp";
import Meja from "../../images/interactive/team/meja.webp";
import Ruta from "../../images/interactive/team/ruta.webp";
import Saule from "../../images/interactive/team/saule.webp";
import ViktorijaR from "../../images/interactive/team/viktorijaR.webp";
import ViktorijaZ from "../../images/interactive/team/viktorijaZ.webp";
import Martynas from "../../images/interactive/team/martynas.webp";
import Laura from "../../images/interactive/team/laura.webp";
import Simonas from "../../images/interactive/team/simonas.webp";
import Mindaugas from "../../images/interactive/team/mindaugas.webp";
import MantasK from "../../images/interactive/team/mantasK.webp";
import Ugne from "../../images/interactive/team/ugne.webp";
import Kasparas from "../../images/interactive/team/kasparas.webp";
import Gintare from "../../images/interactive/team/gintare.webp";
import Aiste from "../../images/interactive/team/aiste.webp";
import Ainius from "../../images/interactive/team/ainius.webp";
import Ricardas from "../../images/interactive/team/ricardas.webp";
import Gustas from "../../images/interactive/team/gustas.jpg";
import Paulina from "../../images/interactive/team/paulina.jpg";
import Monika from "../../images/interactive/team/monika.jpg";
import Nikita from "../../images/interactive/team/nikita.jpg";
import GintareA from "../../images/interactive/team/gintare.png";

interface TeamMember {
  picture: string;
  name: string;
  position: string;
  phone: string;
  email: string;
}

enum MembersCategories {
  VADOVAI,
  RENGINIU_VADOVAI,
  KOMUNIKACIJA,
  LAN_PARTY_VADOVAI,
  MENTORIAI
}

const TeamSection: React.FC = () => {
  const [showClipboard, setShowClipboard] = useState(false);
  const [currentPage, setCurrentPage] = useState(MembersCategories.VADOVAI);
  const [teamTitle, setTeamTitle] = useState("MIDI Vadovai");

  const [pageTeamMembers, setPageTeamMembers] = useState([] as TeamMember[]);

  const teamMembers: { vadovai: TeamMember[], renginiuVadovai: TeamMember[], komunikacija: TeamMember[], lanPartyVadovai: TeamMember[], mentoriai: TeamMember[] } = {
    vadovai: [
      {
        picture: Augustina,
        name: "Augustina Petraitytė",
        position: "MIDI vadovai",
        phone: "+370 61 399 808",
        email: "vadovas@midi.lt",
      },
      {
        picture: Darius,
        name: "Darius Skergelza",
        position: "Žmogiškųjų išteklių vadovas",
        phone: "+370 60 503 379",
        email: "hr@midi.lt",
      },
      {
        picture: Gytis,
        name: "Gytis Mockevičius",
        position: "Minecraft decathlon'o vadovas",
        phone: "+370 62 423 266",
        email: "minecraft@midi.lt",
      },
      {
        picture: Domas,
        name: "Domas Bruišys",
        position: "LAN Party vadovas",
        phone: "+370 60 313 085",
        email: "lan@midi.lt",
      },
      {
        picture: Rokas,
        name: "Rokas Baltrušaitis",
        position: "Marketingo vadovas",
        phone: "+370 67 543 514",
        email: "marketingas@midi.lt",
      },
      {
        picture: Augustas,
        name: "Augustas Švetkauskas",
        position: "Organizacinės srities vadovas",
        phone: "+370 62 213 302",
        email: "org@midi.lt",
      },
      {
        picture: Olen,
        name: "Olen Račkauskas",
        position: "Informacinių technologijų vadovas",
        phone: "+370 64 622 318",
        email: "it@midi.lt",
      },
      {
        picture: Titas,
        name: "Titas Masys",
        position: "Roko operos vadovas",
        phone: "+370 69 535 871",
        email: "ro.vadovas@midi.lt",
      },
      {
        picture: Vaiva,
        name: "Vaiva Janavičiūtė",
        position: "Organizacinės srities vadovė",
        phone: "+370 65 653 406",
        email: "org@midi.lt",
      },
      {
        picture: MantasG,
        name: "Mantas Globys",
        position: "Organizacinės srities vadovas",
        phone: "+370 69 368 981",
        email: "org@midi.lt",
      },
      {
        picture: Nojus,
        name: "Nojus Jokūbaitis",
        position: "Kūrybinės grupės vadovas",
        phone: "+370 67 188 075",
        email: "kurybine@midi.lt",
      },
      {
        picture: Meja,
        name: "Mėja Plytnikaitė",
        position: "Administratorė",
        phone: "+370 67 978 534",
        email: "admin@midi.lt",
      },
      {
        picture: Ruta,
        name: "Rūta Skergelzaitė",
        position: "Komunikacijos vadovė",
        phone: "+370 63 818 273",
        email: "org@midi.lt",
      },
      {
        picture: Saule,
        name: "Saule Gylyte",
        position: "Barterinių remėjų vadovė",
        phone: "+370 60 940 829",
        email: "reklama@midi.lt",
      },
    ],
    renginiuVadovai: [
      {
        picture: Laura,
        name: "Laura Ukrinaitė",
        position: "Sportinio pokerio vadovė",
        phone: "+370 64 501 020",
        email: "pokeris@midi.lt",
      },
      {
        picture: Aiste,
        name: "Aistė Jurjonaitė",
        position: "Protmūšio vadovė",
        phone: "+370 64 072 522",
        email: "protmusis@midi.lt",
      },
      {
        picture: Kasparas,
        name: "Kasparas Šumskis",
        position: "Sporto dienų vadovas",
        phone: "+370 68 923 669",
        email: "sportas@midi.lt",
      },
      {
        picture: Gintare,
        name: "Gintarė Antulytė",
        position: "Sporto dienų vadovė",
        phone: "+370 66 223 500",
        email: "sportodiena@midi.lt",
      },
      {
        picture: Ainius,
        name: "Ainius Gecas",
        position: "Šachmatų turnyro vadovas",
        phone: "+370 61 838 654",
        email: "sachmatai@midi.lt",
      },
      {
        picture: Ugne,
        name: "Ugnė Vaičiūnaitė",
        position: "Uždarymo vakaro vadovė",
        phone: "+370 68 917 616",
        email: "uzdarymas@midi.lt",
      },
      {
        picture: Rokas,
        name: "Rokas Baltrušaitis",
        position: "Marketingo vadovas",
        phone: "+370 67 543 514",
        email: "marketingas@midi.lt",
      },
    ],
    komunikacija: [
      {
        picture: Martynas,
        name: "Martynas Mažuolis",
        position: "Video vadovas",
        phone: "+370 64 479 996",
        email: "video@midi.lt",
      },
      {
        picture: ViktorijaR,
        name: "Viktorija Ramonaitė",
        position: "Dizaino srities vadovė",
        phone: "+370 62 081 727",
        email: "dizainas@midi.lt",
      },
      {
        picture: ViktorijaZ,
        name: "Viktorija Žemaitytė",
        position: "Press vadovė",
        phone: "+370 68 307 008",
        email: "press@midi.lt",
      },
    ],
    lanPartyVadovai: [
      {
        picture: Simonas,
        name: "Simonas Sušickis",
        position: "Stream vadovas",
        phone: "+370 61 679 110",
        email: "stream@midi.lt",
      },
      {
        picture: Mindaugas,
        name: "Mindaugas Tolušis",
        position: "Discord vadovas",
        phone: "+370 62 500 503",
        email: "discord@midi.lt",
      },
      {
        picture: MantasK,
        name: "Mantas Kandrotas",
        position: "Offline veiklų vadovas",
        phone: "+370 61 206 610",
        email: "offline@midi.lt",
      },
    ],
    mentoriai: [
      {
        picture: Ricardas,
        name: "Ričardas Čubukinas",
        position: "LAN mentorius",
        phone: "",
        email: "",
      },
      {
        picture: Gustas,
        name: "Gustas Štaševskis",
        position: "IT mentorius",
        phone: "",
        email: "",
      },
      {
        picture: Nikita,
        name: "Nikita Gladčenko",
        position: "Organizatorių mentorius",
        phone: "",
        email: "",
      },
      {
        picture: GintareA,
        name: "Gintarė Aliukonytė",
        position: "Komunikacijos mentorė",
        phone: "",
        email: "",
      },
      {
        picture: Paulina,
        name: "Paulina Bilinskaitė",
        position: "HR ir vadovų mentorė",
        phone: "",
        email: "",
      },
      {
        picture: Monika,
        name: "Monika Barauskaitė",
        position: "HR ir komunikacijos mentorė",
        phone: "",
        email: "",
      }
    ]
  };

  useEffect(() => {
    setPageTeamMembers([...teamMembers.vadovai]);
  }, []);

  const nextPage = () => {
    if (currentPage + 1 >= MembersCategories.MENTORIAI + 1) return;

    switch (currentPage + 1) {
      case MembersCategories.VADOVAI:
        setPageTeamMembers([...teamMembers.vadovai]);
        setTeamTitle("MIDI Vadovai");
        break;
      case MembersCategories.RENGINIU_VADOVAI:
        setPageTeamMembers([...teamMembers.renginiuVadovai]);
        setTeamTitle("MIDI Renginių vadovai");
        break;
      case MembersCategories.KOMUNIKACIJA:
        setPageTeamMembers([...teamMembers.komunikacija]);
        setTeamTitle("MIDI Komunikacija");
        break;
      case MembersCategories.LAN_PARTY_VADOVAI:
        setPageTeamMembers([...teamMembers.lanPartyVadovai]);
        setTeamTitle("MIDI LAN Party vadovai");
        break;
      case MembersCategories.MENTORIAI:
        setPageTeamMembers([...teamMembers.mentoriai]);
        setTeamTitle("MIDI Mentoriai");
        break;
    }

    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage - 1 <= MembersCategories.VADOVAI - 1) return;

    switch (currentPage - 1) {
      case MembersCategories.VADOVAI:
        setPageTeamMembers([...teamMembers.vadovai]);
        setTeamTitle("MIDI Vadovai");
        break;
      case MembersCategories.RENGINIU_VADOVAI:
        setPageTeamMembers([...teamMembers.renginiuVadovai]);
        setTeamTitle("MIDI Renginių vadovai");
        break;
      case MembersCategories.KOMUNIKACIJA:
        setPageTeamMembers([...teamMembers.komunikacija]);
        setTeamTitle("MIDI Komunikacija");
        break;
      case MembersCategories.LAN_PARTY_VADOVAI:
        setPageTeamMembers([...teamMembers.lanPartyVadovai]);
        setTeamTitle("MIDI LAN Party vadovai");
        break;
      case MembersCategories.MENTORIAI:
        setPageTeamMembers([...teamMembers.mentoriai]);
        setTeamTitle("MIDI Mentoriai");
        break;
    }

    setCurrentPage(currentPage - 1);
  };
  // @ts-ignore
  // @ts-ignore
  return (
    <div>
      {/* Icon */}
      {!showClipboard && (
        <button
          className="h-24 w-20 bg-gray-900 rounded"
          onClick={() => setShowClipboard(true)}
        >
          <div className="absolute w-1/3 left-1/2 transform -translate-x-1/2 h-2">
            <div className="absolute w-1/3 left-1/2 transform -translate-x-1/2 top-0 h-1/3 rounded-t-full bg-gradient-to-t from-amber-500 via-45% via-amber-100 to-amber-400"></div>
            <div className="absolute w-full top-1/3 h-3/4 rounded-t-full bg-gradient-to-t from-amber-500 via-45% via-amber-100 to-amber-400"></div>
          </div>
          <div className="flex items-center justify-center">
            <div className="m-2 h-20 w-16 bg-gray-400 flex justify-center">
              <p className="text-black text-sm">Komanda</p>
            </div>
          </div>
        </button>
      )}

      {/* Member list */}
      {showClipboard && (
          <div
              className="z-20 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowClipboard(false);
                }
              }}
          >
            <div
                className="absolute bg-gray-900 rounded overflow-hidden"
                style={{ width: "50%", height: "95vh", maxHeight: "60rem", maxWidth: "60rem" }} // Adjust width and height as needed
            >
              <div className="absolute w-1/2 left-1/2 transform -translate-x-1/2 h-16">
                <div className="absolute w-1/3 left-1/2 transform -translate-x-1/2 top-0 h-1/3 rounded-t-full bg-gradient-to-t from-amber-500 via-45% via-amber-100 to-amber-400"></div>
                <div className="absolute w-full top-1/3 h-3/4 rounded-t-full bg-gradient-to-t from-amber-500 via-45% via-amber-100 to-amber-400"></div>
              </div>
              <div className="h-full bg-gray-300 overflow-auto m-12 no-scrollbar">
                <h1 className="flex justify-center text-3xl mt-8">{teamTitle}</h1>
                <div
                    className="flex flex-wrap justify-center pb-8 mb-24">
                  {pageTeamMembers.map((member, index) => (
                      <div key={index} className="flex flex-wrap justify-center mx-4 mt-4">
                        {/* placeholder */}
                        <Avatar
                            className="basis-full md:basis-1/3 lg:basis-1/4"
                            name={member.name}
                            title={member.position}
                            imgsrc={member.picture}
                            phone={member.phone}
                            email={member.email}
                        />
                      </div>
                  ))}
                </div>
                <div className="flex justify-between absolute bottom-0 left-0 right-0 px-8 py-2 bg-gray-900">
                  <input className="invert-[100%]" type="image" src={BackArrow} onClick={previousPage} alt="Previous Page" />
                  <input className="invert-[100%]" type="image" src={ForwardArrow} onClick={nextPage} alt="Next Page" />
                </div>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default TeamSection;
