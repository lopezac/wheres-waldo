import { string } from "prop-types";
import styled from "styled-components";

import { MapCardDiv } from "../../shared/MapDiv";
import { MapImgCard } from "../../shared/MapImg";
import { formatName } from "../../shared/formatUtils";
import { StyledLink } from "../../shared/Navbar";

const CardTitle = styled.h2``;

function MapCard({ name, imgPath }) {
  return (
    <StyledLink to={`/game/${name}`}>
      <MapCardDiv>
        <MapImgCard src={imgPath} alt={name} />
        <CardTitle>{formatName(name)}</CardTitle>
      </MapCardDiv>
    </StyledLink>
  );
}

MapCard.propTypes = {
  name: string,
  imgPath: string,
};

export default MapCard;
