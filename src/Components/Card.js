import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  return (
    <div className=" shadow-md p-2 bg-white">
      <div className="p-1 border overflow-hidden">
        <img
          className="w-full transition-all hover:scale-105 ease-in-out"
          src={props.img}
          alt="img"
        />
      </div>
      <div className="flex justify-between  bg-slate-200 p-1">
        <h2 className="font-semibold">{props.title}</h2>
        <h5 className="flex items-center gap-1">
          <FontAwesomeIcon className="text-sm" icon="fa-solid fa-star" /> {props.review}
        </h5>
      </div>

      <p className="py-2 text-center text-gray-500">{props.desc}</p>
      <div className="flex justify-end text-red-500">
        <span>{props.price} $</span>
      </div>
    </div>
  );
}
