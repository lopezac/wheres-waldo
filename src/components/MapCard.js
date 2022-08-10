import { Link } from "react-router-dom";
import { string } from "prop-types";

import { formatName } from "../utilities/formatUtils";

function MapCard({ name, imgPath }) {
  return (
    <Link to={`/game/${name}`}>
      <div>
        <img src={imgPath} alt={name} />
        <h2>{formatName(name)}</h2>
      </div>
    </Link>
  );
}

MapCard.propTypes = {
  name: string,
  imgPath: string,
};

export default MapCard;
