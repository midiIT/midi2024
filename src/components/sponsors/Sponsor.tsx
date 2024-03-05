import {SponsorType} from "./Types.ts";

type Props = {
    sponsor: SponsorType
}

export default function Sponsor({ sponsor: { title, logo, url } }: Props) {
    const navigateToSponsor = () => {
        window.open(url, "_blank", "noreferrer")
    }

    return (
        <div className="m-2 flex">
            <img src={logo} alt={title} style={{maxWidth: '400px'}}
                 onClick={navigateToSponsor}/>
        </div>
    )
}