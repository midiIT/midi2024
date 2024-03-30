import Sponsor from "./Sponsor.tsx"
import { SponsorType } from "./Types.ts"
import './styles.css'

export default function Sponsors() {
    const sponsors: { gold: SponsorType[], silver: SponsorType[], bronze: SponsorType[], standard: SponsorType[] } = {

        // TODO: change logos
        gold: [
            {
                title: 'asseco',
                url: 'https://lt.asseco.com/',
                logo: 'https://midi.lt/2023/_next/static/media/asseco.bd0fe713.png?w=3840&q=75'
            },
            {
                title: 'accenture',
                url: 'https://www.accenture.com/',
                logo: 'https://midi.lt/2023/_next/static/media/asseco.bd0fe713.png?w=3840&q=75'
            },
        ],
        silver: [
            {
                title: 'twoday',
                url: 'https://www.twoday.lt/',
                logo: 'https://midi.lt/2023/_next/static/media/telia.84485178.svg?w=828&q=75'
            },
            {
                title: 'teltonika',
                url: 'https://teltonika-iot-group.com/lt',
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
                title: 'nordcurrent',
                url: 'https://nordcurrent.com/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
            {
                title: 'luminor',
                url: 'https://www.luminor.lt/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
            {
                title: 'coherent_solutions',
                url: 'https://www.coherentsolutions.com/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
            {
                title: 'kpmg_baltics',
                url: 'https://kpmg.com/lt/en/home.html',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
            {
                title: 'western_union',
                url: 'https://www.westernunion.com/lt/en/home.html',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
            {
                title: 'shift4',
                url: 'https://www.shift4.com/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
        ],
        standard: [
            {
                title: 'pwc',
                url: 'https://www.pwc.com/lt/lt/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
            {
                title: 'wix',
                url: 'https://www.wix.com/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
            {
                title: 'vtex',
                url: 'https://vtex.lt/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
            {
                title: 'neara',
                url: 'https://neara.com/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
        ]
    }

    return (
        <div className="flex justify-center items-center" style={{minHeight: "100vh", backgroundColor: "rgb(15 23 42)"}}>
            <div>
                <p className="mb-8 text-center text-5xl md:text-7xl text-white sponsor--font">Auksiniai rėmėjai</p>
                <div className="flex flex-wrap justify-center">
                    {sponsors.gold.map(sponsor =>
                        (<Sponsor key={sponsor.title} sponsor={sponsor}/>)
                    )}
                </div>
                <div className="my-4 h-2 bg-slate-600/30" style={{width: "98%", margin: "auto"}}></div>
                <p className="mb-8 text-center text-5xl md:text-7xl text-white sponsor--font">Sidabriniai rėmėjai</p>
                <div className="flex flex-wrap justify-center">
                    {sponsors.silver.map(sponsor =>
                        (<Sponsor key={sponsor.title} sponsor={sponsor}/>)
                    )}
                </div>
                <div className="my-4 h-2 bg-slate-600/30" style={{width: "98%", margin: "auto"}}></div>
                <p className="mb-8 text-center text-5xl md:text-7xl text-white sponsor--font">Bronziniai rėmėjai</p>
                <div className="flex flex-wrap justify-center">
                    {sponsors.bronze.map(sponsor =>
                        (<Sponsor key={sponsor.title} sponsor={sponsor}/>)
                    )}
                </div>
                <div className="my-4 h-2 bg-slate-600/30" style={{width: "98%", margin: "auto"}}></div>
                <p className="mb-8 text-center text-5xl md:text-7xl text-white sponsor--font">Standartiniai rėmėjai</p>
                <div className="flex flex-wrap justify-center">
                    {sponsors.standard.map(sponsor =>
                        (<Sponsor key={sponsor.title} sponsor={sponsor}/>)
                    )}
                </div>
            </div>
        </div>
    )
}