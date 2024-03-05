import Sponsor from "./Sponsor.tsx";
import { SponsorType } from "./Types.ts";

export default function Sponsors() {

    // TODO: replace with real sponsonrs
    // placeholder data
    const sponsors: { gold: SponsorType[], silver: SponsorType[], bronze: SponsorType[] } = {
        gold: [
            {
                title: 'asseco',
                url: 'https://lt.asseco.com/',
                logo: 'https://midi.lt/2023/_next/static/media/asseco.bd0fe713.png?w=3840&q=75'
            },
            {
                title: 'bankera',
                url: 'https://bankerait.lt/',
                logo: 'https://midi.lt/2023/_next/static/media/bankera.5825ccf0.svg?w=1200&q=75'
            },
            {
                title: 'asseco1',
                url: 'https://lt.asseco.com/',
                logo: 'https://midi.lt/2023/_next/static/media/asseco.bd0fe713.png?w=3840&q=75'
            },
            {
                title: 'bankera1',
                url: 'https://bankerait.lt/',
                logo: 'https://midi.lt/2023/_next/static/media/bankera.5825ccf0.svg?w=1200&q=75'
            },
            {
                title: 'asseco2',
                url: 'https://lt.asseco.com/',
                logo: 'https://midi.lt/2023/_next/static/media/asseco.bd0fe713.png?w=3840&q=75'
            },
            {
                title: 'bankera2',
                url: 'https://bankerait.lt/',
                logo: 'https://midi.lt/2023/_next/static/media/bankera.5825ccf0.svg?w=1200&q=75'
            },
            {
                title: 'asseco3',
                url: 'https://lt.asseco.com/',
                logo: 'https://midi.lt/2023/_next/static/media/asseco.bd0fe713.png?w=3840&q=75'
            },
            {
                title: 'bankera3',
                url: 'https://bankerait.lt/',
                logo: 'https://midi.lt/2023/_next/static/media/bankera.5825ccf0.svg?w=1200&q=75'
            },
        ],
        silver: [
            {
                title: 'telia',
                url: 'https://www.telia.lt/',
                logo: 'https://midi.lt/2023/_next/static/media/telia.84485178.svg?w=828&q=75'
            },
            {
                title: 'wargaming',
                url: 'https://wgforge.wargaming.com/',
                logo: 'https://midi.lt/2023/_next/static/media/wargaming.b4a13829.svg?w=640&q=75'
            },
        ],
        bronze: [
            {
                title: 'bentley',
                url: 'https://www.bentley.com/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
            {
                title: 'cognizant',
                url: 'https://www.devbridge.com/',
                logo: 'https://midi.lt/2023/_next/static/media/devbridge.9aae1ed8.png?w=1920&q=75'
            },
        ]
    }

    return (
        //  bg-black
        <div className="h-screen flex justify-center items-center">
            <div>
                {/*text-white*/}
                <p className="mb-8 text-center text-5xl md:text-7xl">Auksiniai rėmėjai</p>
                <div className="grid grid-cols-3">
                    {sponsors.gold.map(sponsor =>
                        (<Sponsor key={sponsor.title} sponsor={sponsor} />)
                    )}
                </div>
            </div>
            <div className="my-4 h-2 bg-slate-600/30"></div>
        </div>
    )
}