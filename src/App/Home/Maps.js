import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import getInitialData from "./initialData";
import MapCard from "./MapCard";
import { MapsDiv } from "../../shared/MapDiv";

function Maps() {
  const firebase = useOutletContext();
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    handleStart();
  }, []);

  async function handleStart() {
    await getMapsData().then((data) => {
      if (!data.length) writeMaps();
    });
    getMapsData().then((data) => setMaps(data));
  }

  async function writeMaps() {
    getInitialData().map(async (map) => {
      await setDoc(doc(firebase.db(), "albums", map.name), {
        photo: map.photo,
        characters: map.characters,
      });
    });
  }

  async function getMapsData() {
    const mapsSnapshot = await getDocs(collection(firebase.db(), "albums"));
    let mapsData = [];

    mapsSnapshot.forEach((map) =>
      mapsData.push({ name: map.id, img: map.data().photo })
    );

    return mapsData;
  }

  return (
    <MapsDiv>
      {maps.map((map) => {
        return <MapCard key={map.name} name={map.name} imgPath={map.img} />;
      })}
    </MapsDiv>
  );
}

export default Maps;
