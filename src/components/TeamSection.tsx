import React, {useEffect, useState} from "react";
import Avatar from "./Avatar.tsx";
import testImg from "../images/midi-50.webp";

import Augustina from "../images/team/augustina.webp";
import Darius from "../images/team/darius.webp";
import Gytis from "../images/team/gytis.webp";
import Domas from "../images/team/domas.webp";
import Rokas from "../images/team/rokas.webp";
import Augustas from "../images/team/augustas.webp";
import Olen from "../images/team/olen.webp";
import Titas from "../images/team/titas.png";
import Vaiva from "../images/team/vaiva.webp";
import MantasG from "../images/team/mantasG.webp";
import Nojus from "../images/team/nojus.webp";
import Meja from "../images/team/meja.webp";
import Ruta from "../images/team/ruta.webp";
import Saule from "../images/team/saule.webp";
import ViktorijaR from "../images/team/viktorijaR.webp";
import ViktorijaZ from "../images/team/viktorijaZ.webp";
import Martynas from "../images/team/martynas.webp";
import Laura from "../images/team/laura.webp";
import Simonas from "../images/team/simonas.webp";
import Mindaugas from "../images/team/mindaugas.webp";
import MantasK from "../images/team/mantasK.webp";
import Ugne from "../images/team/ugne.webp";
import Kasparas from "../images/team/kasparas.webp";
import Gintare from "../images/team/gintare.webp";
import Aiste from "../images/team/aiste.webp";
import Ainius from "../images/team/ainius.webp";
import Ricardas from "../images/team/ricardas.webp";
import Gustas from "../images/team/gustas.jpg";
import Paulina from "../images/team/paulina.jpg";
import Monika from "../images/team/monika.jpg";
import Nikita from "../images/team/nikita.jpg";
import GintareA from "../images/team/gintare.png";

interface TeamMember {
  picture: string;
  name: string;
  position: string;
  phone: string;
  email: string;
}

const TeamSection: React.FC = () => {
  const [showClipboard, setShowClipboard] = useState(false);
  const [currentPage, setCurrentPage] = useState(0)

  const [pageTeamMembers, setPageTeamMembers] = useState([] as TeamMember[])

  const teamMembers: TeamMember[] = [
    { picture: Augustina, name: "Augustina Petraitytė", position: "MIDI vadovai", phone: "+370 61 399 808", email: "vadovas@midi.lt" },
    { picture: Darius, name: "Darius Skergelza", position: "Žmogiškųjų išteklių vadovas", phone: "+370 60 503 379", email: "hr@midi.lt" },
    { picture: Gytis, name: "Gytis Mockevičius", position: "Minecraft decathlon'o vadovas", phone: "+370 62 423 266", email: "minecraft@midi.lt" },
    { picture: Domas, name: "Domas Bruišys", position: "LAN Party vadovas", phone: "+370 60 313 085", email: "lan@midi.lt" },
    { picture: Rokas, name: "Rokas Baltrušaitis", position: "Marketingo vadovas", phone: "+370 67 543 514", email: "marketingas@midi.lt" },
    { picture: Augustas, name: "Augustas Švetkauskas", position: "Organizacinės srities vadovas", phone: "+370 62 213 302", email: "org@midi.lt" },
    { picture: Olen, name: "Olen Račkauskas", position: "Informacinių technologijų vadovas", phone: "+370 64 622 318", email: "it@midi.lt" },
    { picture: Titas, name: "Titas Masys", position: "Roko operos vadovas", phone: "+370 69 535 871", email: "ro.vadovas@midi.lt" },
    { picture: Vaiva, name: "Vaiva Janavičiūtė", position: "Organizacinės srities vadovė", phone: "+370 65 653 406", email: "org@midi.lt" },
    { picture: MantasG, name: "Mantas Globys", position: "Organizacinės srities vadovas", phone: "+370 69 368 981", email: "org@midi.lt" },
    { picture: Nojus, name: "Nojus Jokūbaitis", position: "Kūrybinės grupės vadovas", phone: "+370 61 788 075", email: "kurybine@midi.lt" },
    { picture: Meja, name: "Mėja Plytnikaitė", position: "Administratorė", phone: "+370 67 978 534", email: "admin@midi.lt" },
    { picture: Ruta, name: "Rūta Skergelzaitė", position: "Komunikacijos vadovė", phone: "+370 63 818 273", email: "org@midi.lt" },
    { picture: Saule, name: "Saule Gylyte", position: "Barterinių remėjų vadovė", phone: "+370 60 940 829", email: "reklama@midi.lt" },
    { picture: Laura, name: "Laura Ukrinaitė", position: "Sportinio pokerio vadovė", phone: "+370 64 501 020", email: "pokeris@midi.lt" },
    { picture: Aiste, name: "Aistė Jurjonaitė", position: "Protmūšio vadovė", phone: "+370 64 072 522", email: "protmusis@midi.lt" },
    { picture: Kasparas, name: "Kasparas Šumskis", position: "Sporto dienų vadovas", phone: "+370 68 923 669", email: "sportas@midi.lt" },
    { picture: Gintare, name: "Gintarė Antulytė", position: "Sporto dienų vadovė", phone: "+370 66 223 500", email: "sportodiena@midi.lt" },
    { picture: Ainius, name: "Ainius Gecas", position: "Šachmatų turnyro vadovas", phone: "+370 61 838 654", email: "sachmatai@midi.lt" },
    { picture: Ugne, name: "Ugnė Vaičiūnaitė", position: "Uždarymo vakaro vadovė", phone: "+370 68 917 616", email: "uzdarymas@midi.lt" },
    { picture: Martynas, name: "Martynas Mažuolis", position: "Video vadovas", phone: "+370 64 479 996", email: "video@midi.lt" },
    { picture: ViktorijaR, name: "Viktorija Ramonaitė", position: "Dizaino srities vadovė", phone: "+370 62 081 727", email: "dizainas@midi.lt" },
    { picture: ViktorijaZ, name: "Viktorija Žemaitytė", position: "Press vadovė", phone: "+370 68 307 008", email: "press@midi.lt" },
    { picture: Simonas, name: "Simonas Sušickis", position: "Stream vadovas", phone: "+370 61 679 110", email: "stream@midi.lt" },
    { picture: Mindaugas, name: "Mindaugas Tolušis", position: "Discord vadovas", phone: "+370 62 500 503", email: "discord@midi.lt" },
    { picture: MantasK, name: "Mantas Kandrotas", position: "Offline veiklų vadovas", phone: "+370 61 206 610", email: "offline@midi.lt" },
    { picture: Ricardas, name: "Ričardas Čubukinas", position: "LAN mentorius", phone: "", email: "" },
    { picture: Gustas, name: "Gustas Štaševskis", position: "IT mentorius", phone: "", email: "" },
    { picture: Nikita, name: "Nikita Gladčenko", position: "Organizatorių mentorius", phone: "", email: "" },
    { picture: GintareA, name: "Gintarė Aliukonytė", position: "Komunikacijos mentorė", phone: "", email: "" },
    { picture: Paulina, name: "Paulina Bilinskaitė", position: "HR ir vadovų mentorė", phone: "", email: "" },
    { picture: Monika, name: "Monika Barauskaitė", position: "HR ir komunikacijos mentorė", phone: "", email: "" }
  ];

  useEffect(() => {
    setPageTeamMembers([...teamMembers].splice(0, 6))
  }, [])

  const amountOfPages = teamMembers.length / 6

  const nextPage = () => {
    if (currentPage + 1 >= amountOfPages) return

    setPageTeamMembers([...teamMembers].splice((currentPage + 1) * 6, 6))
    setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    if (currentPage <= 0) return

    setPageTeamMembers([...teamMembers].splice((currentPage - 1) * 6, 6))
    setCurrentPage(currentPage - 1)
  }
  return (
    <div>
      {/* Icon */}
      {!showClipboard && (
      <button className="h-24 w-20 bg-gray-900 rounded" onClick={() => setShowClipboard(true)}>
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
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto no-scrollbar"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowClipboard(false);
          }
        }}>
          <div className="absolute top-0 bg-gray-900 rounded">
            <div className="absolute w-1/2 left-1/2 transform -translate-x-1/2 h-16">
              <div
                  className="absolute w-1/3 left-1/2 transform -translate-x-1/2 top-0 h-1/3 rounded-t-full bg-gradient-to-t from-amber-500 via-45% via-amber-100 to-amber-400"></div>
              <div
                  className="absolute w-full top-1/3 h-3/4 rounded-t-full bg-gradient-to-t from-amber-500 via-45% via-amber-100 to-amber-400"></div>
            </div>
            <div className="m-12 pt-8 bg-gray-400 p-4 grid">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {pageTeamMembers.map((member, index) => (
                    <div key={index} className="flex flex-wrap justify-center">
                      {/* placeholder */}
                      <Avatar
                          className="basis-full md:basis-1/3 lg:basis-1/4"
                          name={member.name}
                          title={member.position}
                          imgsrc={member.picture}
                          phone={member.phone}
                          email={member.email}
                          placeholder={"blur"}
                      />
                    </div>
                ))}
              </div>
              <button onClick={previousPage}>Previous page</button>
              <button onClick={nextPage}>Next page</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
