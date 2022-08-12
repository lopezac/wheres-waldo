import { useState } from "react";

import { allFound } from "../../shared/formatUtils";
import { MapGameImg } from "../../shared/MapImg";
import TargetBox from "./TargetBox";
import { MapCardDiv } from "../../shared/MapDiv";
import { useParams } from "react-router-dom";

function MapImg({ characters, mapData, removeCharacter }) {
  const [clickPosition, setClickPosition] = useState([]);
  const [targetBoxPos, setTargetBoxPos] = useState([]);
  const [showTargetBox, setShowTargetBox] = useState(false);

  const mapName = useParams().mapName;

  function handlePhotoClick(e) {
    if (!allFound(characters)) toggleTargetBox();
    const x = getXFromImg(e);
    const y = getYFromImg(e);
    setTargetBoxPos([e.pageX, e.pageY]);
    setClickPosition([x, y]);
  }

  function getXFromImg(e) {
    return (
      ((e.pageX - e.target.offsetLeft) / e.target.width) * e.target.naturalWidth
    );
  }

  function getYFromImg(e) {
    return (
      ((e.pageY - e.target.offsetTop) / e.target.height) *
      e.target.naturalHeight
    );
  }

  function isClickInsideImg(pos, x, y) {
    return x >= pos.x[0] && x <= pos.x[1] && y >= pos.y[0] && y <= pos.y[1];
  }

  function checkPositionHitChar([x, y]) {
    for (const char of mapData.characters) {
      if (isClickInsideImg(char.position, x, y)) return char.name;
    }
    return false;
  }

  async function handleListClick(e) {
    toggleTargetBox();
    const charName = e.target.textContent;
    const charHitted = await checkPositionHitChar(clickPosition);
    if (charName === charHitted) removeCharacter(charName);
  }

  function toggleTargetBox() {
    setShowTargetBox(!showTargetBox);
  }

  return (
    <MapCardDiv>
      {mapData && (
        <MapGameImg
          onClick={handlePhotoClick}
          src={mapData.photo}
          alt={mapName}
        />
      )}
      {showTargetBox && (
        <TargetBox
          characters={characters}
          handleListClick={handleListClick}
          position={targetBoxPos}
        />
      )}
    </MapCardDiv>
  );
}

export default MapImg;
