import { useState, useRef, MouseEvent } from "react";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import TeamSection from "../components/interactive/teamSection.tsx";
import EventSection from "../components/interactive/eventSection.tsx";
import Sponsors from "../components/interactive/sponsors/Sponsors.tsx";
import MIDILogo from "../images/interactive/MIDI-Logotipas.png";

function Interactive() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const logoClicks = useRef(0);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setCursorPosition({
      top: e.clientY - e.currentTarget.offsetTop,
      left: e.clientX - e.currentTarget.offsetLeft,
    });
  };

  const onLogoClick = () => {
    logoClicks.current += 1; // Increment click count
    if (logoClicks.current === 5) {
      setIsModalOpen(true);
      logoClicks.current = 0; // Reset count after opening modal
    }
  };

  return (
    <>
      {/* Corkboard Section */}
      <div
        onMouseMove={onMouseMove}
        className="relative h-screen bg-cover bg-center bg-[url(../images/interactive/corkboard.jpg)]"
      >
        {/* Logo Container */}
        <div className="flex justify-center pt-4">
          <img
            className="h-32 w-32 z-10"
            src={MIDILogo}
            alt="MIDI Logo"
            onClick={onLogoClick}
          ></img>
          <PasswordModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>

        <EventSection />
        {/* Team Icon in Bottom Right Corner */}
        <div className="flex flex-col absolute bottom-4 right-4 items-center">
          <TeamSection />
        </div>

        {/* Spotlight Effect */}
        <div
          style={{
            background: `radial-gradient(circle at ${cursorPosition.left}px ${cursorPosition.top}px, #00000000 10px, #000000ee 350px)`,
            pointerEvents: `none`,
          }}
          className="z-10 absolute inset-0 top-0 left-0"
        />
      </div>

      {/* Sponsors Section */}
      <Sponsors />
    </>
  );
}

const secretKey = "kazkasnekazkaseasypeasypeasysqueezy";

function PasswordModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const hashedInput = CryptoJS.SHA256(input).toString();

    const credentials = [
      { hash: "98fa4d59c08e5e3b611da495c95fcd6473e3ab4d10314bdf3b084cf194dd41c3", hint: "U2FsdGVkX18y/k7hGcXgeVxTIAozCq63HgBGhWJMq+aZxcbBe7hK4dI/uDJhZTYf" },
      { hash: "another_hash", hint: "another_encrypted_hint" },
      // Add more hashes and hints as required
  ];
  

  const credential = credentials.find(cred => cred.hash === hashedInput);

  if (credential) {
      // Decrypt the hint using the secret key
      const bytes = CryptoJS.AES.decrypt(credential.hint, secretKey);
      const decryptedHint = bytes.toString(CryptoJS.enc.Utf8);

      toast.success(`Here is your hint: ${decryptedHint}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
  } else {
      toast.error('Wrong password!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
  }
    setTimeout(() => {
      onClose();
    }, 5000); // Close modal after submit
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center px-4 py-6 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative transition-opacity duration-300 ease-out animate-fade-in">
        <button
          className="absolute top-3 right-3 text-lg font-semibold text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Enter Your Secret Password
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="form-input w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
            placeholder="Password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Interactive;
