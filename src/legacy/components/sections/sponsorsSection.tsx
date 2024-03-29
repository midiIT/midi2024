import Sponsor from "../Sponsor";
import Asseco from "../../public/sponsors/asseco.png";
import Accenture from "../../public/sponsors/accenture.png";
import TwoDay from "../../public/sponsors/twoday.svg";
import Coherent from "../../public/sponsors/coherent.png";
import Kpmg from "../../public/sponsors/kpmg.png";
import WU from "../../public/sponsors/westernunionWhite.png";
import Teltonika from "../../public/sponsors/teltonika.svg";
import Bentley from "../../public/sponsors/bentley.png";
import NordCurrent from "../../public/sponsors/nordcurrent.png";
import Luminor from "../../public/sponsors/luminor.svg";
import Shift4 from "../../public/sponsors/shift4.svg";
import MadeInVilnius from "../../public/sponsors/miv.png";

var goldenSponsors = [
  {
    href: "https://lt.asseco.com/",
    src: Asseco,
    alt: "asseco logotipas",
    className: "scale-150 sm:scale-100 basis-1/2 md:basis-1/3 px-4",
  },
  {
    href: "https://bootcamp.lv",
    src: Accenture,
    alt: "Accenture logotipas",
    className: "scale-150 sm:scale-100 basis-1/2 md:basis-1/3 px-4",
  },
];

var silverSponsors = [
  {
    href: "https://www.twoday.lt/",
    src: TwoDay,
    alt: "TwoDay logotipas",
    className: "scale-125 basis-1/2 md:basis-1/4",
  },
  {
    href: "https://teltonika-iot-group.com/",
    src: Teltonika,
    alt: "Teltonika logotipas",
    className: "scale-125 basis-1/2 md:basis-1/4",
  },
];

var bronzeSponsors = [
  {
    href: "https://www.bentley.com/",
    src: Bentley,
    alt: "Bentley logo",
    className: "basis-1/6 scale-75",
  },
  {
    href: "http://www.nordcurrent.com/",
    src: NordCurrent,
    alt: "Nordcurrent logotipas",
    className: "basis-1/6 scale-[45%]",
  },
  {
    href: "https://www.luminor.lt/",
    src: Luminor,
    alt: "Luminor logotipas",
    className: "basis-1/6 scale-75",
  },
  {
    href: "https://www.coherentsolutions.com/",
    src: Coherent,
    alt: "Coherent logotipas",
    className: "basis-1/6 scale-75",
  },
  {
    href: "https://kpmg.com/lt/lt/home.html",
    src: Kpmg,
    alt: "Kpmg logotipas",
    className: "basis-1/6 scale-75",
  },
  {
    href: "https://careers.westernunion.com/wulithuania/",
    src: WU,
    alt: "Western Union logotipas",
    className: "basis-1/6 scale-75",
  },
  {
    href: "https://www.shift4.com/lt",
    src: Shift4,
    alt: "Shift4 logotipas",
    className: "basis-1/6",
  }
];

// var partners = [
//   {
//     href: "https://madeinvilnius.lt/",
//     src: MadeInVilnius,
//     alt: "MadeInVilnius logotipas",
//     className: "scale-75",
//   },
// ];

export default function SponsorsSection() {
  return (
    <div>
      <p className="text-center text-5xl md:text-7xl">Auksiniai rėmėjai</p>
      <div className="mx-16 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
        {goldenSponsors.map((sponsor, idx) => (
          <Sponsor
            href={sponsor.href}
            src={sponsor.src}
            alt={sponsor.alt}
            key={idx}
            className={sponsor.className}
          ></Sponsor>
        ))}
      </div>
      <div className="my-4 h-2 bg-slate-600/30"></div>
      <p className="text-center text-5xl md:text-7xl">Sidabriniai rėmėjai</p>
      <div className="mx-16 mt-8 flex flex-wrap items-center justify-around justify-items-stretch gap-8 align-middle">
        {silverSponsors.map((sponsor, idx) => (
          <Sponsor
            href={sponsor.href}
            src={sponsor.src}
            alt={sponsor.alt}
            key={idx}
            className={sponsor.className}
          ></Sponsor>
        ))}
      </div>
      <div className="my-4 h-2 bg-slate-600/30"></div>
      <p className="text-center text-5xl md:text-7xl">Bronziniai rėmėjai</p>
      <div className="m-8 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
        {bronzeSponsors.map((sponsor, idx) => (
          <Sponsor
            href={sponsor.href}
            src={sponsor.src}
            alt={sponsor.alt}
            key={idx}
            className={sponsor.className}
          ></Sponsor>
        ))}
      </div>
      <div className="my-4 h-2 bg-slate-600/30"></div>
      {/* <p className="text-center text-5xl md:text-7xl">Partneriai</p>
      <div className="m-8 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
        {partners.map((sponsor, idx) => (
          <Sponsor
            href={sponsor.href}
            src={sponsor.src}
            alt={sponsor.alt}
            key={idx}
            className={sponsor.className}
          ></Sponsor>
        ))}
      </div> */}
    </div>
  );
}
