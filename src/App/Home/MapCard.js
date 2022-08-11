import { Link } from "react-router-dom";
import { string } from "prop-types";

import { MapCardDiv } from "../../shared/MapDiv";
import { MapImgCard } from "../../shared/MapImg";
import { formatName } from "../../shared/formatUtils";

function MapCard({ name, imgPath }) {
  return (
    <Link to={`/game/${name}`}>
      <MapCardDiv>
        <MapImgCard src={imgPath} alt={name} />
        <h2>{formatName(name)}</h2>
      </MapCardDiv>
    </Link>
  );
}

MapCard.propTypes = {
  name: string,
  imgPath: string,
};

export default MapCard;
