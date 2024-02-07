import Sponsor from "./Sponsor.tsx";

export default function Sponsors() {

    type SponsorType = {
        title: string;
        url: string;
        logo: string;
    }

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
        <div className="h-screen flex justify-center items-center bg-black">
            {sponsors.gold.map(sponsor =>
                (<Sponsor key={sponsor.title} title={sponsor.title} url={sponsor.url} />)
            )}
        </div>
    )
}