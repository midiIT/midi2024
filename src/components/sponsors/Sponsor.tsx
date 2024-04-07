export default function Sponsor(props: {
    href: string;
    src: string;
    alt: string;
    key?: number;
    className?: string;
}) {
    return (
        <a target="_blank" href={props.href} className={props.className + " flex justify-center"}>
            <img src={props.src} alt={props.alt}/>
        </a>
    );
}