import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import styled from "styled-components";

import ResetBtn from "./ResetBtn";
import { ResetTimeContext } from "./resetTime-context";
import { allFound } from "../../shared/formatUtils";
import MapImg from "./MapImg";
import Header from "./Header";

const GameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

function GameIndex() {
  const mapName = useParams().mapName;
  const firebase = useOutletContext();

  const [characters, setCharacters] = useState([]);
  const [mapData, setMapData] = useState(null);
  const [timeEnd, setTimeEnd] = useState(false);

  useEffect(() => {
    getData().then((data) => setMapData(data));
  }, []);

  useEffect(() => {
    if (mapData) setCharactersName();
  }, [mapData]);

  function reset() {
    setCharactersName();
    setTimeEnd(!timeEnd);
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
    let tempCharacters = characters.slice();
    for (let char of tempCharacters) {
      if (char.name === character) char.found = true;
    }
    setCharacters(tempCharacters);
  }

  return (
    <GameDiv>
      <ResetTimeContext.Provider value={timeEnd}>
        <Header characters={characters} />
        {mapData && (
          <MapImg
            removeCharacter={removeCharacter}
            mapData={mapData}
            characters={characters}
          />
        )}
        {allFound(characters) && <ResetBtn resetGame={reset} />}
      </ResetTimeContext.Provider>
    </GameDiv>
  );
}

export default GameIndex;
