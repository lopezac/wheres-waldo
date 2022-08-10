import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

import TargetBox from "../components/TargetBox";
import ResetBtn from "../components/ResetBtn";
import CharactersNav from "../components/CharactersNav";
import Timer from "../components/Timer";
import { MapNameContext } from "../mapName-context";

function Game() {
  const mapName = useParams().mapName;
  const firebase = useOutletContext();

  const [characters, setCharacters] = useState([]);
  const [clickPosition, setClickPosition] = useState([]);
  const [showTargetBox, setShowTargetBox] = useState(false);
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    getData().then((data) => setMapData(data));
  }, []);

  useEffect(() => {
    if (!mapData) return;
    console.log("mapData", mapData);
    setCharactersName();
  }, [mapData]);

  useEffect(() => {
    console.log("characters", characters);
  }, [characters]);

  function reset() {
    setCharactersName();
    setShowTargetBox(false);
  }

  async function getData() {
    const docRef = doc(firebase.db(), "albums", mapName);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  function setCharactersName() {
    setCharacters(
      mapData.characters.map((char) => {
        return { name: char.name, found: false };
      })
    );
  }

  function checkPositionHitChar([x, y]) {
    for (const char of mapData.characters) {
      const pos = char.position;
      if (x >= pos.x[0] && x <= pos.x[1] && y >= pos.y[0] && y <= pos.y[1]) {
        return char.name;
      }
    }
    return false;
  }

  function charactersFound() {
    return characters.every((char) => char.found);
  }

  function handlePhotoClick(e) {
    if (!charactersFound()) toggleTargetBox();
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    setClickPosition([x, y]);
  }

  async function handleListClick(e) {
    toggleTargetBox();
    const charName = e.target.textContent;
    const charHitted = await checkPositionHitChar(clickPosition);
    if (charName === charHitted) removeCharacter(charName);
  }

  function removeCharacter(character) {
    let tempCharacters = characters.slice();
    for (let char of tempCharacters) {
      if (char.name === character) char.found = true;
    }
    setCharacters(tempCharacters);
  }

  function toggleTargetBox() {
    setShowTargetBox(!showTargetBox);
  }

  return (
    <div>
      <MapNameContext.Provider value={mapName}>
        <Timer characters={characters} />
        <CharactersNav characters={characters} />
        {mapData && (
          <img onClick={handlePhotoClick} src={mapData.photo} alt={mapName} />
        )}
        {showTargetBox && (
          <TargetBox
            characters={characters}
            handleListClick={handleListClick}
          />
        )}
        {charactersFound() && <ResetBtn resetGame={reset} />}
      </MapNameContext.Provider>
    </div>
  );
}

export default Game;
