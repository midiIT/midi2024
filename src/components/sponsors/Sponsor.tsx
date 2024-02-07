type Props = {
    title: string
    url: string
}

export default function Sponsor({ title, url }: Props) {
    const navigateToSponsor = () => {
        window.open(url, "_blank", "noreferrer")
    }

    return (
        <div className="text-5xl font-bold text-white m-8" onClick={navigateToSponsor} >
            { title }
        </div>
    )
}