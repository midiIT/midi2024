import Carousel from "@/legacy/components/Carousel";
import ArticleSection from "@/legacy/components/sections/articleSection";
import EventsSection from "@/legacy/components/sections/eventsSection";
import OrganizersSection from "@/legacy/components/sections/organizersSection"
import SponsorsSection from "@/legacy/components/sections/sponsorsSection";
import TestPDF from "@/legacy/public/pdf/placeholder1.pdf";
import { Helmet } from "react-helmet";

import "../styles/static.css";

export default function Static() {
  return (
    <>
      <Helmet>
        <title>MIDI 2024</title>
        <meta name="description" content="MIDI 2024 tinklalapis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="flex flex-col md:flex-row">
        <div className="md:my-4 md:mx-4 md:h-full md:w-48"></div>
        <Carousel></Carousel>
        <section
          id="events"
          className="h-screen w-full px-4 pt-4 text-white transition-opacity duration-500"
        >
          <EventsSection />
        </section>
        <section
          id="team"
          className="invisible hidden w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        >
          <OrganizersSection />
        </section>
        <section
          id="sponsors"
          className="invisible hidden w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        >
          <SponsorsSection />
        </section>
        <section
          id="articles"
          className="invisible hidden h-screen w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        >
          <div className="grid-cols1 grid md:grid-cols-2 lg:grid-cols-3">
            <ArticleSection name="Test" pdfLocation={TestPDF} />
          </div>
        </section>
      </div>
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