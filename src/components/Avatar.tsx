export default function Avatar(props: {
  name: string;
  title: string;
  imgsrc: string;
  email: string;
  phone: string;
  className?: string;
  priority?: boolean;
  placeholder?: any;
}) {
  return (
    <div
      className={
        props.className + " flex flex-col items-center gap-2 text-center"
      }
    >
      <img
        className="min-w-48 min-h-48 h-48 w-48 rounded-full object-cover"
        src={props.imgsrc}
        alt={props.name}
        loading={props.priority ? "eager" : "lazy"}
      />
      <p className="text-4xl">{props.name}</p>
      <p className="w-3/4 text-2xl ">{props.title}</p>
      <a
        href={"mailto:" + props.email}
        className="w-3/4 text-2xl text-midiblue"
      >
        {props.email}
      </a>
      <a href={"tel:" + props.phone} className="w-3/4 text-2xl text-midiblue">
        {props.phone}
      </a>
    </div>
  );
}