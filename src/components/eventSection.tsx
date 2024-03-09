import React, { useState, useEffect, useRef } from "react";
import placeholderImg from "../images/placeholderEvent.webp";

export default function EventSection() {
  const [showEvent, setShowEvent] = useState(false);

  // Using an array of refs to handle multiple notes dynamically
  const notesRefs = useRef([]);
  notesRefs.current = [];
  const addToRefs = (el) => {
    if (el && !notesRefs.current.includes(el)) {
      notesRefs.current.push(el);
    }
  };

  // Define your notes and their positions here
  const [notes, setNotes] = useState([
    { id: "note1", top: "10%", left: "-10%" },
    { id: "note2", top: "50%", left: "10%" },
    { id: "note3", top: "10%", left: "30%" },
    { id: "note4", top: "10%", left: "50%" },
  ]);

  // Define connections between notes by their IDs
  const [connections, setConnections] = useState([
    { startId: "note1", endId: "note2" },
    { startId: "note2", endId: "note3" },
    { startId: "note3", endId: "note4" },
    { startId: "note4", endId: "note1" },
    { startId: "note1", endId: "note3" },
    { startId: "note2", endId: "note4" },
  ]);

  const [paths, setPaths] = useState([]);

  const toggleEvent = () => setShowEvent(!showEvent);

    const calculatePath = (startNote, endNote) => {
      const startX = startNote.left + startNote.width / 2 + window.scrollX;
      const startY = startNote.top + startNote.height / 2 + window.scrollY;
      const endX = endNote.left + endNote.width / 2 + window.scrollX;
      const endY = endNote.top + endNote.height / 2 + window.scrollY;

      // Control points for the Bezier curve
      const cp1X = (startX + endX) / 2;
      const cp1Y = Math.min(startY, endY) + 200; // Adjust the arch's height
      const cp2X = cp1X;
      const cp2Y = cp1Y;

      return `M ${startX},${startY} C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${endX},${endY}`;
    };

    const updatePaths = () => {
      const newPaths = connections.map((conn) => {
        const startIdx = notes.findIndex(note => note.id === conn.startId);
        const endIdx = notes.findIndex(note => note.id === conn.endId);
        if (startIdx !== -1 && endIdx !== -1 && notesRefs.current[startIdx] && notesRefs.current[endIdx]) {
          const startNote = notesRefs.current[startIdx].getBoundingClientRect();
          const endNote = notesRefs.current[endIdx].getBoundingClientRect();
          return calculatePath(startNote, endNote);
        }
        return null;
      }).filter(path => path);
      setPaths(newPaths);
    };
    
    useEffect(() => {
      window.addEventListener('resize', updatePaths);
      updatePaths(); // Initial calculation and on resize
    
      return () => {
        window.removeEventListener('resize', updatePaths);
      };
    }, [connections, notes.length]);

    useEffect(() => {
    const handleLoadAndResize = () => {
      // This function will be called on window load and resize
      updatePaths();
    };

    // Attach the event listener for the load event
    window.addEventListener('load', handleLoadAndResize);
    // Attach the event listener for the resize event
    window.addEventListener('resize', handleLoadAndResize);

    // Call updatePaths directly in case the component mounts after window.load event
    // This ensures paths are calculated even if the load event has already fired
    // A slight delay can help ensure the DOM is fully ready
    setTimeout(updatePaths, 100);

    return () => {
      window.removeEventListener('load', handleLoadAndResize);
      window.removeEventListener('resize', handleLoadAndResize);
    };
  }, []);

  return (
    <div>
      {notes.map((note, index) => (
        <img
          key={note.id}
          ref={addToRefs}
          src={placeholderImg}
          alt={`Note ${index + 1}`}
          className="z-10 absolute"
          style={{ top: note.top, left: note.left, transform: "rotate(-20deg) scale(0.3)" }}
          onClick={toggleEvent}
        />
      ))}

      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        {paths.map((path, index) => (
          <path key={index} d={path} stroke="rgba(195, 6, 6, 1)" strokeWidth="4" fill="none" />
        ))}
      </svg>

      {showEvent && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto z-20">
          <img
            src={placeholderImg}
            alt="Event Fullscreen"
            className="scale-100 cursor-pointer"
            onClick={toggleEvent}
          />
        </div>
      )}
    </div>
  );
}
