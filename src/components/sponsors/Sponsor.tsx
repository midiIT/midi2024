import { SponsorType } from "./Types.ts"
import './styles.css'

type Props = {
    sponsor: SponsorType
}

export default function Sponsor({ sponsor: { title, logo, url } }: Props) {
    return (
        <a href={url} target='_blank' rel='noreferrer' className='scale-150 sm:scale-100 basis-1/2 md:basis-1/4 px-4 flex justify-center w-80'>
            <img src={logo} alt={title} style={{alignSelf: 'center'}} />
        </a>
    )
}