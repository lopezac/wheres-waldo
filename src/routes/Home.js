import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

import getFirebaseConfig from "../firebase-config";

const config = getFirebaseConfig();
const app = initializeApp(config);
const db = getFirestore();

function Home() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    getMapsData().then((mapsData) => setMaps(mapsData));
  }, []);

  async function getMapsData() {
    const mapsSnapshot = await getDocs(collection(db, "albums"));
    let mapsData = [];

    mapsSnapshot.forEach((map) =>
      mapsData.push({ name: map.id, img: map.data().photo })
    );

    return mapsData;
  }

  return (
    <div>
      {maps.map((map) => {
        return (
          <div>
            <img src={map.img} alt={map.name} />
            <h2>{map.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
