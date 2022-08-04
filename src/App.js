import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  setDoc,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore";

import getFirebaseConfig from "./firebase-config";
import TargetBox from "./components/TargetBox";

const firebaseConfig = getFirebaseConfig();

const app = initializeApp(firebaseConfig);
const db = getFirestore();

function App() {
  const [photo, setPhoto] = useState({});
  const [characters, setCharacters] = useState([]);
  const [clickPosition, setClickPosition] = useState([]);
  const [showTargetBox, setShowTargetBox] = useState(false);

  useEffect(() => {
    async function handleStart() {
      const isDatabaseEmpty = await checkDatabaseIsEmpty();
      if (isDatabaseEmpty) await writeAlbum();
      setPhoto({
        name: "waldo",
        url: "./assets/waldo.jpg",
      });
    }

    handleStart();
  }, []);

  useEffect(() => {
    setCharactersName();
  }, [photo]);

  async function writeAlbum() {
    await setDoc(doc(db, "albums", "waldo"), {
      photo: "waldo",
      characters: [
        { name: "Waldo", position: { x: [528, 556], y: [360, 406] } },
        { name: "Green Waldo", position: { x: [236, 260], y: [362, 427] } },
        { name: "Small Waldo", position: { x: [655, 673], y: [609, 642] } },
      ],
    });
  }

  async function checkDatabaseIsEmpty() {
    const q = query(collection(db, "albums"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
  }

  async function getData(docName) {
    const docRef = doc(db, "albums", docName);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  async function checkPositionHitChar(docName, [x, y]) {
    const docData = await getData(docName);
    for (const char of docData.characters) {
      const position = char.position;
      if (
        x >= position.x[0] &&
        x <= position.x[1] &&
        y >= position.y[0] &&
        y <= position.y[1]
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
    const charHitted = await checkPositionHitChar(photo.name, clickPosition);
    if (charName === charHitted) console.log("corrrect");
  }

  function toggleTargetBox() {
    setShowTargetBox(!showTargetBox);
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  async function setCharactersName() {
    if (isEmpty(photo)) return;
    const docData = await getData(photo.name);
    setCharacters(docData.characters.map((char) => char.name));
  }

  return (
    <div>
      <img onClick={handlePhotoClick} src={photo.url} alt={photo.name} />
      {showTargetBox && (
        <TargetBox characters={characters} handleListClick={handleListClick} />
      )}
    </div>
  );
}

export default App;
