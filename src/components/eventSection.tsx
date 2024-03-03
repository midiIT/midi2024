import React, { useState } from "react";
import placeholderImg from "../images/placeholderEvent.webp";

export default function eventSection() {
  const [showEvent, setShowEvent] = useState(false);

  const toggleEvent = () => {
    setShowEvent(!showEvent);
  };

  return (
    <div>
      <img
        src={placeholderImg}
        alt="Event1"
        className="z-10 absolute top-0 left-14 rotate-[-20deg] scale-[.3]"
        onClick={toggleEvent}
      />

      {/* Show placeholder image fullscreen (with info in the future) */}
      {showEvent && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto no-scrollbar z-20">
          <img
            src={placeholderImg}
            alt="Event1"
            className="scale-100 cursor-pointer"
            onClick={toggleEvent}
        />
        </div>
      )}
    </div>
  );
}
