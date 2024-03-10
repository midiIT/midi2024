import { SponsorType } from "./Types.ts"
import './styles.css'

type Props = {
    sponsor: SponsorType
}

export default function Sponsor({ sponsor: { title, logo, url } }: Props) {
    const navigateToSponsor = () => {
        window.open(url, "_blank", "noreferrer")
    }

    return (
        <img className="m-3 sponsor" src={logo} alt={title}
             onClick={navigateToSponsor}/>
    )
}