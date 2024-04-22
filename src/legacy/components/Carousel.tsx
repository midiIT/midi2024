import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { toast } from "react-toastify";
import TeamSectionIcon from "../public/icons/TeamSection.webp";
import EventSectionIcon from "../public/icons/EventSection.webp";
import SponsorSectionIcon from "../public/icons/SponsorSection.webp";
//import ArticleSectionIcon from "../public/icons/ArticleSection.webp";
import Navigationbuttons from "../components/NavigationButtons";
import MIDILogotipas from "../public/MIDIlogo.webp"
import CryptoJS from "crypto-js";

const sections: string[] = ["events", "team", "sponsors", "articles"];

export default function Carousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const logoClicks = useRef(0);

  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    breakpoints: { "(min-width: 768px)": { active: false } },
    axis: "x",
    loop: true,
    skipSnaps: true,
    // Remove the 'speed' property from the object literal
    // speed: 20,
    inViewThreshold: 0.7,
  });
  const [selectedIndex, setSelectedIndex] = useState<number[]>([0]);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex([embla.selectedScrollSnap()]);
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    const scrollSnaps = embla.scrollSnapList().map(() => {
      return null as never;
    });
    setScrollSnaps(scrollSnaps);
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  useEffect(() => {
    sections.forEach((element) => {
      var sel = document.querySelector("#" + element);
      if (sel !== null) {
        if (sel.id !== sections[selectedIndex[0]]) {
          if (
            !sel.classList.contains("hidden") &&
            !sel.classList.contains("invisible")
          ) {
            sel.classList.add("hidden");
            sel.classList.add("invisible");
            sel.classList.add("opacity-0");
          }
        } else {
          sel.classList.remove("hidden");
          window.setTimeout(function () {
            if (sel) {
              sel.classList.remove("invisible");
              sel.classList.remove("opacity-0");
            }
          }, 0);
        }
      }
    });
  }, [selectedIndex]);

  const onLogoClick = () => {
    logoClicks.current += 1; // Increment click count
    if (logoClicks.current === 5) {
      setIsModalOpen(true);
      logoClicks.current = 0; // Reset count after opening modal
    }
  };

  return (
    <div className="z-50 w-full bg-gradient-to-b from-slate-800 to-slate-700/80 py-4 px-8 backdrop-blur-sm md:fixed md:flex md:h-screen md:w-48 md:flex-col md:justify-around">
      <img
        alt="MIDI logotipas"
        src={MIDILogotipas}
        height="1250"
        width="1250"
        loading="eager"
        className="m-auto h-36 w-auto pr-8 pb-10 md:mb-0 md:mr-0 md:-ml-2 md:mt-0 md:h-auto md:pr-0 short:ml-1"
        onClick={onLogoClick}
        ></img>
        <PasswordModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      <div
        className="overflow-y-scroll short:pt-4 no-scrollbar"
        ref={emblaRef}
      >
        <div className="flex flex-row md:h-full md:flex-col md:justify-evenly md:gap-12 short:gap-0">
          <div className="mx-4 flex w-full flex-none flex-col items-center md:mx-0">
            <div
              onClick={() => {
                setSelectedIndex([0]);
              }}
              className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"
            >
              <img src={EventSectionIcon} className="h-32 text-white md:h-20 short:h-14 scale-125"></img>
              <h2 className="my-1 text-center text-4xl text-white md:text-2xl">
                Renginiai
              </h2>
            </div>
            <Navigationbuttons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
            <Navigationbuttons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
          </div>
          <div className="mx-4 flex w-full flex-none flex-col items-center md:mx-0">
            <div
              onClick={() => setSelectedIndex([1])}
              className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"
            >
              <img src={TeamSectionIcon} className="h-32 text-gray-300 md:h-20 short:h-14 scale-125"></img>
              <h2 className="my-1 text-center text-4xl text-white md:text-2xl">
                Komanda
              </h2>
            </div>
            <Navigationbuttons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
          </div>
          <div className="mx-4 flex w-full flex-none flex-col items-center md:mx-0">
            <div
              onClick={() => setSelectedIndex([2])}
              className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"
            >
              <img src={SponsorSectionIcon} className="h-32 text-red-700 md:h-20 short:h-14 scale-125"></img>
              <h2 className="my-1 text-center text-4xl text-white md:text-2xl">
                Rėmėjai
              </h2>
            </div>
            <Navigationbuttons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
          </div>
          {/*<div className="mx-4 flex w-full flex-none flex-col items-center md:mx-0">*/}
          {/*  <div*/}
          {/*    onClick={() => setSelectedIndex([3])}*/}
          {/*    className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"*/}
          {/*  >*/}
          {/*    <img src={ArticleSectionIcon} className="h-32 text-white md:h-20 short:h-14 scale-125"></img>*/}
          {/*    <h2 className="my-1 text-center text-4xl text-white md:text-2xl">*/}
          {/*      Rėmėjų straipsniai*/}
          {/*    </h2>*/}
          {/*  </div>*/}
          {/*  <Navigationbuttons*/}
          {/*    scrollNext={scrollNext}*/}
          {/*    scrollPrev={scrollPrev}*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
      {
        <div className="mt-2 flex justify-center space-x-2 md:hidden">
          {scrollSnaps.map((_, idx) => (
            <button
              className={`h-2 w-6 rounded-sm ${
                idx === selectedIndex[0] ? "bg-yellow-500" : "bg-gray-300"
              }`}
              key={idx}
              onClick={() => scrollTo(idx)}
            />
          ))}
        </div>
      }
    </div>
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