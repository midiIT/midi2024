import Sponsor from "./Sponsor.tsx"
import { SponsorType } from "./Types.ts"
import './styles.css'

import accentureLogo from '../../images/logos/accenture.png'
import assecoLogo from '../../images/logos/asseco.png'
import bentleyLogo from '../../images/logos/bentley.png'
import coherentLogo from '../../images/logos/coherent.png'
import kpmgLogo from '../../images/logos/kpmg.png'
import luminorLogo from '../../images/logos/luminor.svg'
import nearaLogo from '../../images/logos/neara.png'
import nordcurrentLogo from '../../images/logos/nordcurrent.png'
import pwcLogo from '../../images/logos/pwc.png'
import shift4Logo from '../../images/logos/shift4.svg'
import teltonikaLogo from '../../images/logos/teltonika.svg'
import twodayLogo from '../../images/logos/twoday.svg'
import vtextLogo from '../../images/logos/vtex.png'
import westernunionLogo from '../../images/logos/westernunionWhite.png'
import wixLogo from '../../images/logos/wix.svg'

export default function Sponsors() {
    const sponsors: { gold: SponsorType[], silver: SponsorType[], bronze: SponsorType[], standard: SponsorType[], partners: SponsorType[] } = {
        gold: [
            {
                title: 'asseco',
                url: 'https://lt.asseco.com/',
                logo: assecoLogo
            },
            {
                title: 'accenture',
                url: 'https://www.accenture.com/',
                logo: accentureLogo
            },
        ],
        silver: [
            {
                title: 'twoday',
                url: 'https://www.twoday.lt/',
                logo: twodayLogo
            },
            {
                title: 'teltonika',
                url: 'https://teltonika-iot-group.com/lt',
                logo: teltonikaLogo
            },
        ],
        bronze: [
            {
                title: 'bentley',
                url: 'https://www.bentley.com/',
                logo: bentleyLogo
            },
            {
                title: 'nordcurrent',
                url: 'https://nordcurrent.com/',
                logo: nordcurrentLogo
            },
            {
                title: 'luminor',
                url: 'https://www.luminor.lt/',
                logo: luminorLogo
            },
            {
                title: 'coherent_solutions',
                url: 'https://www.coherentsolutions.com/',
                logo: coherentLogo
            },
            {
                title: 'kpmg_baltics',
                url: 'https://kpmg.com/lt/en/home.html',
                logo: kpmgLogo
            },
            {
                title: 'western_union',
                url: 'https://www.westernunion.com/lt/en/home.html',
                logo: westernunionLogo
            },
            {
                title: 'shift4',
                url: 'https://www.shift4.com/',
                logo: shift4Logo
            },
        ],
        standard: [
            {
                title: 'pwc',
                url: 'https://www.pwc.com/lt/lt/',
                logo: pwcLogo
            },
            {
                title: 'wix',
                url: 'https://www.wix.com/',
                logo: wixLogo
            },
            {
                title: 'vtex',
                url: 'https://vtex.lt/',
                logo: vtextLogo
            },
            {
                title: 'neara',
                url: 'https://neara.com/',
                logo: nearaLogo
            },
        ],
        partners: [
            {
                title: 'badmintono_centras',
                url: 'https://badmintonocentras.lt/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
            {
                title: 'smutis',
                url: 'https://smutis.lt/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
            {
                title: 'pepsi',
                url: 'https://www.pepsi.com/',
                logo: 'https://midi.lt/2023/_next/static/media/bentley.8296207b.png?w=640&q=75'
            },
        ]
    }

    return (
        <div className="flex justify-center items-center" style={{minHeight: "100vh", backgroundColor: "rgb(15 23 42)", paddingTop: '2rem'}}>
            <div>
                {/* Gold sponsors */}
                <p className="mb-8 text-center text-5xl md:text-7xl text-white sponsor--font">Auksiniai rėmėjai</p>
                <div className="mx-16 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
                    {sponsors.gold.map(sponsor =>
                        (<Sponsor key={sponsor.title} sponsor={sponsor}/>)
                    )}
                </div>

                {/* Silver sponsors */}
                <div className="my-16 h-2 bg-slate-600/30" style={{width: "98%", margin: "auto"}}></div>
                <p className="mb-8 text-center text-5xl md:text-7xl text-white sponsor--font">Sidabriniai rėmėjai</p>
                <div className="mx-16 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
                    {sponsors.silver.map(sponsor =>
                        (<Sponsor key={sponsor.title} sponsor={sponsor}/>)
                    )}
                </div>

                {/* Bronze sponsors */}
                <div className="my-16 h-2 bg-slate-600/30" style={{width: "98%", margin: "auto"}}></div>
                <p className="mb-8 text-center text-5xl md:text-7xl text-white sponsor--font">Bronziniai rėmėjai</p>
                <div className="mx-16 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
                    {sponsors.bronze.map(sponsor =>
                        (<Sponsor key={sponsor.title} sponsor={sponsor}/>)
                    )}
                </div>

                {/* Standard sponsors */}
                <div className="my-4 h-2 bg-slate-600/30" style={{width: "98%", margin: "auto"}}></div>
                <p className="mb-8 text-center text-5xl md:text-7xl text-white sponsor--font">Standartiniai rėmėjai</p>
                <div className="mx-16 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
                    {sponsors.standard.map(sponsor =>
                        (<Sponsor key={sponsor.title} sponsor={sponsor}/>)
                    )}
                </div>

                {/* Partners */}
                <div className="my-4 h-2 bg-slate-600/30" style={{width: "98%", margin: "auto"}}></div>
                <p className="mb-8 text-center text-5xl md:text-7xl text-white sponsor--font">Partneriai</p>
                <div className="mx-16 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
                    {sponsors.partners.map(sponsor =>
                        (<Sponsor key={sponsor.title} sponsor={sponsor}/>)
                    )}
                </div>
            </div>
        </div>
    )
}