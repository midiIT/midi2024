import Sponsor from "./Sponsor.tsx"
import './styles.css'

import Asseco from "../../../images/interactive/logos/asseco.png";
import Accenture from "../../../images/interactive/logos/accenture.png";
import TwoDay from "../../../images/interactive/logos/twoday.svg";
import Coherent from "../../../images/interactive/logos/coherent.png";
import Kpmg from "../../../images/interactive/logos/kpmg.png";
import WU from "../../../images/interactive/logos/westernunionWhite.png";
import Teltonika from "../../../images/interactive/logos/teltonika.svg";
import Bentley from "../../../images/interactive/logos/bentley.png";
import NordCurrent from "../../../images/interactive/logos/nordcurrent.png";
import Luminor from "../../../images/interactive/logos/luminor.svg";
import Shift4 from "../../../images/interactive/logos/shift4.svg";
import PWC from "../../../images/interactive/logos/pwc.png";
import Wix from "../../../images/interactive/logos/wix.svg";
import VTeX from "../../../images/interactive/logos/vtex.png";
import Neara from "../../../images/interactive/logos/neara.png";
import Skruzdis from "../../../images/interactive/logos/skruzdis.png";
import Badmintonas from "../../../images/interactive/logos/badmintonoC.svg";
import Pepsi from "../../../images/interactive/logos/pepsi.png";
import Smutis from "../../../images/interactive/logos/aaaaaaaaaaaaa.png";
import Visma from "../../../images/interactive/logos/visma.png";
import MadeInVilnius from "../../../images/interactive/logos/miv.png";


const goldenSponsors = [
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

const silverSponsors = [
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

const bronzeSponsors = [
    {
        href: "https://www.bentley.com/",
        src: Bentley,
        alt: "Bentley logo",
        className: "basis-1/6 scale-125 sm:scale-125 md:scale-125 lg:scale-100",
    },
    {
        href: "http://www.nordcurrent.com/",
        src: NordCurrent,
        alt: "Nordcurrent logotipas",
        className: "basis-1/6 scale-[60%]",
    },
    {
        href: "https://www.luminor.lt/",
        src: Luminor,
        alt: "Luminor logotipas",
        className: "basis-1/6 scale-125 sm:scale-125 md:scale-125 lg:scale-100",
    },
    {
        href: "https://www.coherentsolutions.com/",
        src: Coherent,
        alt: "Coherent logotipas",
        className: "basis-1/6 scale-125 sm:scale-125 md:scale-125 lg:scale-100",
    },
    {
        href: "https://kpmg.com/lt/lt/home.html",
        src: Kpmg,
        alt: "Kpmg logotipas",
        className: "basis-1/6 scale-125 sm:scale-125 md:scale-125 lg:scale-100",
    },
    {
        href: "https://careers.westernunion.com/wulithuania/",
        src: WU,
        alt: "Western Union logotipas",
        className: "basis-1/6 scale-125 sm:scale-125 md:scale-125 lg:scale-100",
    },
    {
        href: "https://www.shift4.com/lt",
        src: Shift4,
        alt: "Shift4 logotipas",
        className: "basis-1/6 scale-[1.5]",
    },
    {
        href: "https://www.visma.lt/",
        src: Visma,
        alt: "Visma logotipas",
        className: "basis-1/6 scale-125 sm:scale-125 md:scale-125 lg:scale-100",
    }
];

const standardSponsors = [
    {
        href: "https://www.pwc.com/lt/en.html",
        src: PWC,
        alt: "PWC logotipas",
        className: "basis-1/4",
    },
    {
        href: "https://www.instagram.com/wixvilnius/",
        src: Wix,
        alt: "Wix logotipas",
        className: "scale-50 md:scale-[0.7] lg:scale-75",
    },
    {
        href: "https://vtex.lt",
        src: VTeX,
        alt: "VTeX logotipas",
        className: "basis-1/4",
    },
    {
        href: "https://neara.com/how-it-works/ ",
        src: Neara,
        alt: "Neara logotipas",
        className: "basis-1/4",
    },
];

const partners = [
    {
        href: "https://badmintonocentras.lt/lt/index",
        src: Badmintonas,
        alt: "Badmintono centras",
        className: "basis-1/4 scale-125 flex items-center justify-center",
    },
    {
        href: "https://smutis.lt/",
        src: Smutis,
        alt: "Smutis",
        className: "basis-1/4 scale-75 flex items-center justify-center",
    },
    {
        href: "https://www.skruzdis.lt/",
        src: Skruzdis,
        alt: "Skruzdis",
        className: "basis-1/4 scale-75 flex items-center justify-center",
    },
    {
        href: "https://www.pepsi.com/",
        src: Pepsi,
        alt: "Pepsi",
        // className: "basis-1/4 scale-50 flex items-center justify-center my-[-7rem]",
        className: "basis-1/4 flex items-center justify-center max-w-[6rem]",
    },
    {
        href: "https://madeinvilnius.lt/",
        src: MadeInVilnius,
        alt: "Made in Vilnius logotipas",
        className: "basis-1/5 scale-75 flex items-center justify-center",
    }
    
];

export default function SponsorsSection() {
    return (
        <div style={{backgroundColor: "rgb(15 23 42)"}}>
            <p className="text-center text-white text-5xl md:text-7xl mb-6 sponsor--font">Auksiniai rėmėjai</p>
            <div
                className="mx-16 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
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
            <p className="text-center text-white text-5xl md:text-7xl sponsor--font">Sidabriniai rėmėjai</p>
            <div
                className="mx-16 mt-8 flex flex-wrap items-center justify-around justify-items-stretch gap-8 align-middle">
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
            <p className="text-center text-white text-5xl md:text-7xl sponsor--font">Bronziniai rėmėjai</p>
            <div
                className="m-8 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
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
            <p className="text-center text-white text-5xl md:text-7xl sponsor--font">Standartiniai rėmėjai</p>
            <div
                className="mt-8 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
                {standardSponsors.map((sponsor, idx) => (
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
            <p className="text-center text-white text-5xl md:text-7xl sponsor--font">Partneriai</p>
            <div
                className="mt-8 md:mr-14 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
                {partners.map((sponsor, idx) => (
                    <Sponsor
                        href={sponsor.href}
                        src={sponsor.src}
                        alt={sponsor.alt}
                        key={idx}
                        className={sponsor.className}
                    ></Sponsor>
                ))}
            </div>
        </div>
    );
}