import { array } from "prop-types";
import { useContext } from "react";

import { MapNameContext } from "./mapName-context";
import { MapImgIcon } from "../../shared/MapImg";
import { NavImgs } from "./NavStyled";

function CharactersNav({ characters }) {
  const mapName = useContext(MapNameContext);

  function getImg(charName) {
    return `./assets/${mapName}-${charName
      .toLowerCase()
      .split(" ")
      .join("-")}.jpg`;
  }

  if (!characters) return;

  return (
    <NavImgs>
      {characters.map((char) => {
        return (
          <div>
            <MapImgIcon src={getImg(char.name)} alt={char.name} />
            <p>{char.name}</p>
          </div>
        );
      })}
    </NavImgs>
  );
}

CharactersNav.propTypes = {
  characters: array,
};

export default CharactersNav;
