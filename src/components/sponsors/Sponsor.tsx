import { SponsorType } from "./Types.ts"
import './styles.css'

type Props = {
    sponsor: SponsorType
}

export default function Sponsor({ sponsor: { title, logo, url } }: Props) {
    return (
        <a href={url} target='_blank' rel='noreferrer' className='md:basis-1/4 md:scale-75 flex'>
            <img className="m-3 sponsor" src={logo} alt={title} style={{width: '100%'}}/>
        </a>
    )
}