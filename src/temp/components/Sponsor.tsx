export default function Sponsor(props: {
  href: string;
  src: string;
  alt: string;
  key?: any;
  className?: string;
}) {
  return (
    <a target="_blank" href={props.href} className={props.className}>
      <img src={props.src} alt={props.alt}></img>
    </a>
  );
}
