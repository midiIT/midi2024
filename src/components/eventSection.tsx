import { useState, useEffect, useRef, SetStateAction } from "react";
import placeholderBanner from "../images/team_clipboard.png";
import BlankNote from "../images/noteBlankTest.png";
import LANNote from "../images/noteLan.svg";
import DecathlonNote from "../images/noteDecathlon.svg";
import ImoniuMugeNote from "../images/noteImoniuMuge.svg";
import OrientacinesNote from "../images/noteOrientacines.svg";
import ProtmusisNote from "../images/noteProtmusis.svg";
import SachmataiNote from "../images/noteSachmatai.svg";
import SportodienosNote from "../images/noteSportodienos.svg";
import UzdarymasNote from "../images/noteUzdarymas.svg";
import LANBanner from "../images/lanparty.webp";
import TeamClipboard from "../images/clipboard-02.png";

export default function EventSection() {
  const [activeNote, setActiveNote] = useState(null);
  const [showEvent, setShowEvent] = useState(false);
  const modalContentRef = useRef();
  // Using an array of refs to handle multiple notes dynamically
  const notesRefs = useRef([]);
  notesRefs.current = [];
  const addToRefs = (el) => {
    if (el && !notesRefs.current.includes(el)) {
      notesRefs.current.push(el);
    }
  };

  const handleClickOutside = (event) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target)
    ) {
      setActiveNote(null); // Close modal
    }
  };

  // Define your notes and their positions here
  const [notes, setNotes] = useState([
    {
      id: "LAN_note",
      top: "5%",
      left: "10%",
      eventName: "MIDI Lan Party",
      image: LANNote,
      banner: LANBanner,
      text: `👾 Margi pikseliai, klavišų garsas, pelės paspaudimai, žaidimo kauliukai, žetonų barškėjimas - ar esi pasiruošęs patirti visa tai ir daugiau vienoje vietoje?<br>
      <br>
      👉 MIDI kviečia visus video žaidimų, stalo žaidimų, sportinio pokerio entuziastus ir mėgėjus balandžio 20-21 dienomis dalyvauti kasmetiniame MIDI LAN Party ir laimėti įvairių prizų!<br>
      <br>
      🎮 Visus komandinę dvasią jaučiančius žaidėjus kviečiame burti komandas ir išbandyti savo jėgas pagrindiniuose LAN turnyruose - League Of Legends, Valorant ir Counter-Strike 2. Nepamiršk pakviesti ir palaikymo komandos, nes renginio metu bus užtikrintos tribūnos palaikymui!<br>
      <br>
      🎯 Jeigu pagrindiniai LAN turnyrai tavęs nesužavėjo ar pilnai nepasitiki savo įgūdžiais – nenusimink! Tavęs lauks įvairūs kompiuteriniai žaidimai - Sims 4 build-offs, Tetris, Tekken 7, Teamfight Tactics ir kiti. Kaip ir pagrindiniuose turnyruose, čia tavęs taip pat laukia prizai.<br>
      <br>
      🎲 Galbūt nesi virtualaus pasaulio pilietis, bet mėgsti žaisti stalo žaidimus? LAN Party metu galėsi išbandyti savo jėgas žaisdamas tokius žaidimus kaip Wingspan ar Powergrid ir, žinoma, laimėti prizų. Taip pat tavęs lauks ir didelė įvairovė kitų stalo žaidimų.<br>
      <br>
      🃏 Mėgsti kortų žaidimus ir nori išbandyti savo sėkmę? LAN Party metu turėsi galimybę ištraukti savo laimingą kortą ir sudalyvauti sportinio pokerio turnyre!<br>
      <br>
      🧩 O kad nepabostų tik konkuruoti dėl prizų, viso renginio metu tavęs laukia ir laisvoji zona, kur su bendraminčiais galėsi kartu žaisti, ką tik panorėjęs. Taip pat galėsi pajudėti virtualiame pasaulyje - esančiame VR zonoje - ar išbandyti savo šokių sugebėjimus visų pamiltame Just Dance!<br>
      <br>
      ‼️ SVARBU ‼️<br>
      LAN party kompiuterinių žaidimų turnyrams reikalinga sava įranga - kompiuteris ir visa reikalinga periferinė įranga - monitoriai, pelės, klaviatūros ir panašiai, tad planuojant dalyvauti bet kuriame kompiuterinių žaidimų turnyre, nepamiršk pasiimti reikalingos įrangos!<br>
      <br>
      Pačiame renginyje gyvai privalo dalyvauti bent 60% turnyruose dalyvaujančių komandos žaidėjų.<br>
      <br>
      🇬🇧<br>
      <br>
      👾 Colorful pixels, sound of keyboards, mouse clicks, game dice, rattling of poker chips – are you ready to experience all of it and more in one place?<br>
      <br>
      👉 MIDI is inviting all video game, board game, sports poker enthusiasts and enjoyers to participate in the annual MIDI LAN Party on April 20-21 and win various prizes!<br>
      <br>
      🎮 All players with a sense of team spirit are invited to form teams and test their strength in the main LAN tournaments – League Of Legends, Valorant and Counter-Strike 2. Don’t forget to invite the support team as well, as there will be stands provided for the supporters during the event!<br>
      <br>
      🎯 But if the main LAN tournaments didn’t catch your attention or you simply are not confident enough in your skills – don’t be upset! Various other computer games will be waiting for you – Sims 4 build-offs, Tetris, Tekken 7, Teamfight Tactics and more. Just like the main tournaments, there will be prizes waiting for you.<br>
      <br>
      🎲 Perhaps you’re not an often visitor to the virtual world, but like to play board games? During LAN party, you can try your hand at games like Wingspan or Powergrid and, of course, win prizes. A wide variety of other boards games will also await you.<br>
      <br>
      🃏 Love card games and want to test your luck? During LAN party, you will have an opportunity to draw your lucky card and participate in Sports Poker Tournament!<br>
      <br>
      🧩 There will also be a free zone available for the entire event, so that you don’t get bored of just competing for the prizes, where you can play whatever, you wish together with other like-minded people. You will also have a chance to explore the virtual world – VR zone – or test your dancing skills in everyone’s beloved Just Dance!<br>
      <br>
      ‼️ IMPORTANT ‼️<br>
      LAN party computer game tournaments require your own equipment – a computer and all necessary peripheral equipment – monitors, computer mice, keyboards, and such, so when planning to participate in any of the tournaments, do not forget to take the necessary equipment! At least 60% of the team players participating in the tournaments must participate live in the event itself.<br>`,
      rotate: "rotate(-10deg)",
      clickable: true,
    },
    {
      id: "Decathlon_note",
      top: "50%",
      left: "5%",
      eventName: "Event numero dos",
      image: DecathlonNote,
      banner: placeholderBanner,
      text: "Testuojamas tekstas note'e",
      rotate: "rotate(10deg)",
      clickable: true,
    },
    {
      id: "Imoniu_note",
      top: "40%",
      left: "30%",
      eventName: "Event numero tres",
      image: ImoniuMugeNote,
      banner: placeholderBanner,
      text: "Testuojamas tekstas note'e",
      rotate: "rotate(20deg)",
      clickable: true,
    },
    {
      id: "Orientacines_note",
      top: "10%",
      left: "80%",
      eventName: "Event numero quatro",
      image: OrientacinesNote,
      banner: placeholderBanner,
      text: "Testuojamas tekstas note'e wooo per daug teksto aaajajajasjdaksdjaskjdkajsdkasjdkasjd",
      rotate: "rotate(-20deg)",
      clickable: true,
    },
    {
      id: "Protmusis_note",
      top: "50%",
      left: "80%",
      eventName: "Event numero quatro",
      image: ProtmusisNote,
      banner: placeholderBanner,
      text: "Testuojamas tekstas note'e wooo per daug teksto aaajajajasjdaksdjaskjdkajsdkasjdkasjd",
      rotate: "rotate(-20deg)",
      clickable: true,
    },
    {
      id: "Sachmatai_note",
      top: "70%",
      left: "20%",
      eventName: "Event numero quatro",
      image: SachmataiNote,
      banner: placeholderBanner,
      text: "Testuojamas tekstas note'e wooo per daug teksto aaajajajasjdaksdjaskjdkajsdkasjdkasjd",
      rotate: "rotate(-20deg)",
      clickable: true,
    },
    {
      id: "Sportodienos_note",
      top: "75%",
      left: "60%",
      eventName: "Event numero quatro",
      image: SportodienosNote,
      banner: placeholderBanner,
      text: "Testuojamas tekstas note'e wooo per daug teksto aaajajajasjdaksdjaskjdkajsdkasjdkasjd",
      rotate: "rotate(-20deg)",
      clickable: true,
    },
    {
      id: "Uzdarymas_note",
      top: "40%",
      left: "50%",
      eventName: "Event numero quatro",
      image: UzdarymasNote,
      banner: placeholderBanner,
      text: "Testuojamas tekstas note'e wooo per daug teksto aaajajajasjdaksdjaskjdkajsdkasjdkasjd",
      rotate: "rotate(-20deg)",
      clickable: true,
    },
    // {
    //   id: "catNote",
    //   top: "70%",
    //   left: "60%",
    //   image: CatNote,
    //   clickable: false,
    // }
  ]);

  // Define connections between notes by their IDs
  const [connections, setConnections] = useState([
    { startId: "LAN_note", endId: "Decathlon_note" },
    { startId: "Decathlon_note", endId: "Imoniu_note" },
    { startId: "Imoniu_note", endId: "Orientacines_note" },
    { startId: "Orientacines_note", endId: "Protmusis_note" },
    { startId: "Protmusis_note", endId: "Sachmatai_note" },
    { startId: "Sachmatai_note", endId: "Sportodienos_note" },
    { startId: "Sportodienos_note", endId: "Uzdarymas_note" },
    { startId: "Orientacines_note", endId: "LAN_note" },
    { startId: "Sachmatai_note", endId: "Decathlon_note" },
  ]);

  const [paths, setPaths] = useState([]);

  const toggleEvent = () => setShowEvent(!showEvent);

  const toggleNote = (noteId) => {
    const note = notes.find((note) => note.id === noteId);
    if (note && note.clickable) {
      // Check if note is clickable
      setActiveNote(activeNote === noteId ? null : noteId);
    }
  };

  const calculatePath = (startNote, endNote) => {
    const startX = startNote.left + startNote.width / 2 + window.scrollX;
    const startY = startNote.top + startNote.height / 2 + window.scrollY;
    const endX = endNote.left + endNote.width / 2 + window.scrollX;
    const endY = endNote.top + endNote.height / 2 + window.scrollY;

    // Control points
    const cp1X = (startX + endX) / 2;
    const cp1Y = Math.max(startY, endY) + 30;
    const cp2X = cp1X;
    const cp2Y = cp1Y;

    return `M ${startX},${startY} C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${endX},${endY}`;
  };

  const updatePaths = () => {
    const newPaths = connections
      .map((conn) => {
        const startIdx = notes.findIndex((note) => note.id === conn.startId);
        const endIdx = notes.findIndex((note) => note.id === conn.endId);
        if (
          startIdx !== -1 &&
          endIdx !== -1 &&
          notesRefs.current[startIdx] &&
          notesRefs.current[endIdx]
        ) {
          const startNote = notesRefs.current[startIdx].getBoundingClientRect();
          const endNote = notesRefs.current[endIdx].getBoundingClientRect();
          return calculatePath(startNote, endNote);
        }
        return null;
      })
      .filter((path) => path);
    setPaths(newPaths);
  };

  useEffect(() => {
    window.addEventListener("resize", updatePaths);
    updatePaths(); // Initial calculation and on resize

    return () => {
      window.removeEventListener("resize", updatePaths);
    };
  }, [connections, notes.length]);

  useEffect(() => {
    const handleLoadAndResize = () => {
      updatePaths();
    };

    // Attach the event listener for the load event
    window.addEventListener("load", handleLoadAndResize);
    // Attach the event listener for the resize event
    window.addEventListener("resize", handleLoadAndResize);

    setTimeout(updatePaths, 100);

    return () => {
      window.removeEventListener("load", handleLoadAndResize);
      window.removeEventListener("resize", handleLoadAndResize);
    };
  }, []);

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {notes.map((note, index) => (
        <div
          key={note.id}
          className={`absolute z-10 w-[12vw] h-[12vh] ${
            note.clickable ? "cursor-pointer" : ""
          }`}
          style={{
            top: note.top,
            left: note.left,
            transform: note.rotate,
          }}
          onClick={() => toggleNote(note.id)}
        >
          <img
            ref={addToRefs}
            src={note.image}
            alt={`Note ${index + 1}`}
            className="transition duration-300 ease-in-out"
          />
        </div>
      ))}

      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        {paths.map((path, index) => (
          <path
            key={index}
            d={path}
            stroke="rgba(195, 6, 6, 1)"
            strokeWidth="4"
            fill="none"
          />
        ))}
      </svg>
      {activeNote && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto z-20">
          <div
            className="flex flex-row items-center justify-center mx-auto"
            style={{ gap: "2vw", maxWidth: "90vw" }} // Controls the maximum width of the container
            ref={modalContentRef}
          >
            {/* Note container with adjusted smaller dimensions */}
            <div
              className="relative transform -rotate-2 w-[25vw] h-full" // Slightly reduced dimensions
            >
              <img
                src={BlankNote}
                alt="Note"
                className="w-full h-full object-cover" // Ensures the note covers the specified dimensions
              />
              {/* Overlay content for the note */}
              <div className="absolute inset-0 flex flex-col justify-center items-center space-y-3 p-4 w-[100%]">
                <img
                  src={notes.find((note) => note.id === activeNote)?.banner}
                  alt="Event Banner"
                  className="object-cover h-[45%]" // Adjust the size to maintain proportionality
                />
                <button className="py-1 px-3 text-xs bg-blue-500 text-white rounded-full">
                  Daugiau / Read More
                </button>
                <button className="py-1 px-3 text-xs bg-blue-500 text-white rounded-full">
                  Registracija / Register
                </button>
              </div>
            </div>
            <div
              className="relative transform rotate-2 w-[35vw] h-full" // Keeping the clipboard slightly smaller
            >
              <img
                src={TeamClipboard}
                alt="Clipboard"
                className="object-cover h-full"
              />
              {/* Text overlay for the clipboard */}
              <div className="absolute inset-0 p-0 flex justify-center items-start">
                <div className="absolute top-[10%] px-12 pb-10 overflow-auto h-[85%] no-scrollbar">
                  <p
                    className="sacramento-regular text-black text-lg h-[100%]"
                    dangerouslySetInnerHTML={{
                      __html:
                        notes.find((note) => note.id === activeNote)?.text ??
                        "",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
