import { array } from "prop-types";
import { useContext } from "react";

import { MapNameContext } from "../contexts/mapName";

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
    <nav>
      {characters.map((char) => {
        return (
          <div>
            <img src={getImg(char.name)} alt={char.name} />
            <p>{char.name}</p>
          </div>
        );
      })}
    </nav>
  );
}

CharactersNav.propTypes = {
  characters: array,
};

export default CharactersNav;
