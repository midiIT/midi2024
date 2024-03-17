import React, { useState, useEffect, useRef } from "react";
import placeholderImg from "../images/placeholderEvent.webp";
import placeholderZoom from "../images/placeholderZoom.png";
import placeholderBanner from "../images/team_clipboard.png";
import RedNote from "../images/redNote.png";
import GreenNote from "../images/greenNote.png";
import OrangeNote from "../images/orangeNote.png";
import PurpleNote from "../images/purpleNote.png";
import CatNote from "../images/catTest.webp";

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
      id: "note1",
      top: "5%",
      left: "10%",
      eventName: "Event numero uno",
      image: PurpleNote,
      banner: CatNote,
      text: "Testuojamas tekstas note'e nomer viens",
      rotate: "rotate(-10deg)",
      clickable: true,
    },
    {
      id: "note2",
      top: "50%",
      left: "5%",
      eventName: "Event numero dos",
      image: RedNote,
      banner: placeholderBanner,
      text: "Testuojamas tekstas note'e",
      rotate: "rotate(10deg)",
      clickable: true,
    },
    {
      id: "note3",
      top: "40%",
      left: "40%",
      eventName: "Event numero tres",
      image: GreenNote,
      banner: placeholderBanner,
      text: "Testuojamas tekstas note'e",
      rotate: "rotate(20deg)",
      clickable: true,
    },
    {
      id: "note4",
      top: "20%",
      left: "70%",
      eventName: "Event numero quatro",
      image: OrangeNote,
      banner: placeholderBanner,
      text: "Testuojamas tekstas note'e wooo per daug teksto aaajajajasjdaksdjaskjdkajsdkasjdkasjd",
      rotate: "rotate(-20deg)",
      clickable: true,
    },
    {
      id: "catNote",
      top: "70%",
      left: "60%",
      image: CatNote,
      clickable: false,
    }
  ]);

  // Define connections between notes by their IDs
  const [connections, setConnections] = useState([
    { startId: "note1", endId: "note2" },
    { startId: "note2", endId: "note3" },
    { startId: "note3", endId: "note4" },
    { startId: "note4", endId: "note1" },
    { startId: "note1", endId: "note3" },
    { startId: "note2", endId: "note4" },
    { startId: "note4", endId: "catNote" },
    { startId: "note1", endId: "catNote" }
  ]);

  const [paths, setPaths] = useState([]);

  const toggleEvent = () => setShowEvent(!showEvent);

  const toggleNote = (noteId) => {
    const note = notes.find((note) => note.id === noteId);
    if (note && note.clickable) { // Check if note is clickable
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
          className={`absolute z-10 scale-[0.7] ${note.clickable ? 'cursor-pointer' : ''}`}
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
          <div className="relative" ref={modalContentRef}>
            <img
              src={placeholderZoom}
              alt="Event Detail"
              className="block mx-auto w-96 h-96"
            />
            <div className="absolute inset-0 flex flex-col justify-between pt-4">
              <h2 className="text-l text-black font-bold text-center">
                {notes.find((note) => note.id === activeNote)?.eventName}
              </h2>
              <div className="flex justify-between px-4">
                <div className="w-1/2 bg-red-500">
                  <img
                    src={notes.find((note) => note.id === activeNote)?.banner}
                    alt="Event Banner"
                    className="block mx-auto"
                  />
                </div>
                <div className="flex flex-col w-1/2 bg-blue-500">
                  <div className="m-4 rounded-full border-4 border-midiblue px-4 pt-2 pb-4 text-center text-xs font-semibold text-midiblue transition-all hover:border-white hover:text-white">
                    Daugiau / Read More
                  </div>
                  <div className="m-4 rounded-full border-4 border-midiblue px-4 pt-2 pb-4 text-center text-xs font-semibold text-midiblue transition-all hover:border-white hover:text-white">
                    Registracija / Register
                  </div>
                </div>
              </div>

              {/* Description at the bottom */}
              <div className="text-base text-black justify-center text-center p-4 overflow-auto">
                <p>{notes.find((note) => note.id === activeNote)?.text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
