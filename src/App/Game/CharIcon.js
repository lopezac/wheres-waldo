import { string } from "prop-types";
import styled from "styled-components";

const MapImgIcon = styled.img`
  width: 70px;
  height: 70px;
  padding-top: 15px;
`;

function CharIcon({ imgPath, name }) {
  return (
    <div>
      <MapImgIcon src={imgPath} alt={name} />
    </div>
  );
}

CharIcon.propTypes = {
  imgPath: string,
  name: string,
};

export default CharIcon;
