import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

import ResetBtn from "./ResetBtn";
import { MapNameContext } from "./mapName-context";
import { allFound } from "../../shared/formatUtils";
import MapImg from "./MapImg";
import Header from "./Header";

function GameIndex() {
  const mapName = useParams().mapName;
  const firebase = useOutletContext();

  const [characters, setCharacters] = useState([]);
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    getData().then((data) => setMapData(data));
  }, []);

  useEffect(() => {
    if (mapData) setCharactersName();
  }, [mapData]);

  useEffect(() => {
    console.log("characters", characters);
  }, [characters]);

  function reset() {
    setCharactersName();
    // setShowTargetBox(false);
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

  function removeCharacter(character) {
    console.log("removeCharacter run");
    let tempCharacters = characters.slice();
    for (let char of tempCharacters) {
      if (char.name === character) char.found = true;
    }
    setCharacters(tempCharacters);
  }

  return (
    <div>
      <MapNameContext.Provider value={mapName}>
        <Header characters={characters} />
        {mapData && (
          <MapImg
            removeCharacter={removeCharacter}
            mapData={mapData}
            characters={characters}
          />
        )}
        {allFound(characters) && <ResetBtn resetGame={reset} />}
      </MapNameContext.Provider>
    </div>
  );
}

export default GameIndex;
