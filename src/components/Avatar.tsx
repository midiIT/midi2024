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
    <div className={
      props.className + " flex flex-col items-center gap-2 text-center"
    }>
      {/* polaroid card */}
      <div className="w-60 h-60 bg-white rounded flex flex-col items-center p-2">
        <img
          className=""
          src={props.imgsrc}
          alt={props.name}
          loading={props.priority ? "eager" : "lazy"}
        />
        <p className="text-4xl">{props.name}</p>
      </div>
      {/* contacts */}
      <p className="w-3/4 text-2xl ">{props.title}</p>
      <a
        href={"mailto:" + props.email}
        className="w-3/4 text-2xl text-midiblue"
      >
        {props.email}
      </a>
      <a href={"tel:" + props.phone} className="text-2xl text-midiblue">
        {props.phone}
      </a>
    </div>
  );
}