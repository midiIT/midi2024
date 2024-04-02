import React, { useState, useEffect, useRef } from "react";
import placeholderImg from "../images/placeholderEvent.webp";
import placeholderZoom from "../images/placeholderZoom.png";
import placeholderBanner from "../images/team_clipboard.png";
import RedNote from "../images/redNote.png";
import GreenNote from "../images/greenNote.png";
import OrangeNote from "../images/orangeNote.png";
import PurpleNote from "../images/purpleNote.png";
import CatNote from "../images/catTest.webp";
import BlankNote from "../images/noteBlank.svg";
import LANNote from "../images/noteLan.svg";
import DecathlonNote from "../images/noteDecathlon.svg";
import ImoniuMugeNote from "../images/noteImoniuMuge.svg";
import OrientacinesNote from "../images/noteOrientacines.svg";
import ProtmusisNote from "../images/noteProtmusis.svg";
import RONote from "../images/noteRO.svg";
import SachmataiNote from "../images/noteSachmatai.svg";
import SportodienosNote from "../images/noteSportodienos.svg";
import UzdarymasNote from "../images/noteUzdarymas.svg";
import LANBanner from "../images/lanparty.webp";

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
      text: "Testuojamas tekstas note'e nomer viens",
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
            className="relative w-[80vw] h-[90vh] mx-auto"
            ref={modalContentRef}
          >
            {/* Ensure the wrapper matches the intended image size */}
            <img
              src={BlankNote}
              alt="Event Detail"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between p-4">
              {/* Overlay content, using padding for positioning instead of margin */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold text-center">
                {notes.find((note) => note.id === activeNote)?.eventName}
              </h2>

              {/* Responsive container for banner and buttons */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                {/* Banner */}
                <div className="w-3/4 md:w-1/2 bg-red-500">
                  <img
                    src={notes.find((note) => note.id === activeNote)?.banner}
                    alt="Event Banner"
                    className="w-full h-auto"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col w-3/4 md:w-1/2 items-center space-y-2">
                  <button className="w-full py-2 bg-blue-500 text-white rounded-full">
                    Daugiau / Read More
                  </button>
                  <button className="w-full py-2 bg-blue-500 text-white rounded-full">
                    Registracija / Register
                  </button>
                </div>
              </div>

              {/* Scrollable text description */}
              <div
                className="text-white text-center overflow-auto p-2"
                style={{ maxHeight: "20%" }}
              >
                <p>{notes.find((note) => note.id === activeNote)?.text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
