export default function Avatar(props: {
  name: string;
  title: string;
  imgsrc: string;
  email: string;
  phone: string;
  className?: string;
  priority?: boolean;
  placeholder?: never;
}) {
  return (
    <div className={
      props.className + " flex flex-col items-center gap-2 text-center"
    }>
      {/* polaroid card */}
      <div className="w-60 h-48 bg-white rounded flex flex-col items-center p-2">
        {/* Set a container for the image to control its size explicitly */}
        <div className="w-44 h-36 overflow-hidden"> {/* Adjust width and height as needed */}
          <img
            className="w-full h-full object-cover" // object-cover will maintain the aspect ratio
            src={props.imgsrc}
            alt={props.name}
            loading={props.priority ? "eager" : "lazy"}
          />
        </div>
        <p className="text-2xl">{props.name}</p>
      </div>
      {/* contacts */}
      <p className="w-3/4 text-xl">{props.title}</p>
      <a
        href={"mailto:" + props.email}
        className="w-3/4 text-xl text-midiblue_dark inline-flex items-center justify-center"
      >
        {props.email}
      </a>
      <a href={"tel:" + props.phone} className="text-xl text-midiblue_dark">
        {props.phone}
      </a>
    </div>
  );
}
