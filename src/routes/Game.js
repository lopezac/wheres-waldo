import { useParams, useOutletContext } from "react-router-dom";
import {useState, useEffect} from "react";
import {
  collection,
  query,
  setDoc,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore";

import TargetBox from "../components/TargetBox";

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
    setCharactersName();
    console.log("mapData ath useEffect", mapData);
  }, [mapData]);

  async function getData() {
    const docRef = doc(firebase.db(), "albums", mapName);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  async function checkPositionHitChar([x, y]) {
    // const docData = await getData(docName);
    for (const char of mapData.characters) {
      const pos = char.position;
      if (
        x >= pos.x[0] &&
        x <= pos.x[1] &&
        y >= pos.y[0] &&
        y <= pos.y[1]
      ) {
        return char.name;
      }
    }
    return false;
  }

  async function handlePhotoClick(e) {
    toggleTargetBox();
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    setClickPosition([x, y]);
  }

  async function handleListClick(e) {
    toggleTargetBox();
    const charName = e.target.textContent;
    const charHitted = await checkPositionHitChar(clickPosition);
    if (charName === charHitted) console.log("corrrect");
  }

  function toggleTargetBox() {
    setShowTargetBox(!showTargetBox);
  }

  async function setCharactersName() {
    // if (isEmpty(photo)) return;
    // const docData = await getData();
    console.log("mapData at setCharactersName", mapData);
    setCharacters(mapData.characters.map((char) => char.name));
  }

      // <img onClick={handlePhotoClick} src={mapData.photo} alt={mapName} />
      // {showTargetBox && (
      //   <TargetBox characters={characters} handleListClick={handleListClick} />
      // )}
  return (
    <div>
    </div>
  );
}

export default Game;
