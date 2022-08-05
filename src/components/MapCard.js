import {Link} from "react-router-dom";

export default function MapCard({name, imgPath}) {
  return (
    <Link to={`/game/${name}`}>
      <div>
        <img src={imgPath} alt={name} />
        <h2>{name}</h2>
      </div>
    </Link>
  );
}


