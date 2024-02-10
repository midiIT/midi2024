import {SponsorType} from "./Types.ts";

type Props = {
    sponsor: SponsorType
}

export default function Sponsor({ sponsor: { title, logo, url } }: Props) {
    const navigateToSponsor = () => {
        window.open(url, "_blank", "noreferrer")
    }

    return (
        // text-white
        // <a className="text-5xl font-bold m-8" onClick={navigateToSponsor} >
        //     { title }
        // </a>
        // <a className="md:basis-1/4 md:scale-75" target="_blank" href={url}>
        //     onClick={navigateToSponsor}
        // <div className="flex content-center">
            <img src={logo} alt={title} className="m-2" style={{maxWidth: '400px', filter: 'invert(100%)'}}
                 onClick={navigateToSponsor} />
        // </div>
        // </a>
    )
}