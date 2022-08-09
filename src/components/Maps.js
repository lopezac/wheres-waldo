import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import MapCard from "./MapCard";

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
    console.log("writeMaps");
    await setDoc(doc(firebase.db(), "albums", "beach-waldo"), {
      photo: "./assets/beach-waldo.jpg",
      characters: [
        { name: "Green Waldo", position: { x: [237, 259], y: [361, 430] } },
        { name: "Waldo", position: { x: [521, 564], y: [357, 412] } },
        { name: "Small Waldo", position: { x: [652, 677], y: [608, 648] } },
      ],
    });
    // await setDoc(doc(firebase.db(), "albums", "space-waldo"), {
    //   photo: "https://pbs.twimg.com/media/Bhjxs_KCIAAkYW5.jpg:large",
    //   characters: [
    //     { name: "Waldo", position: { x: [], y: [] } },
    //     { name: "Blonde Waldo", position: { x: [], y: [] } },
    //     { name: "Brown Waldo", position: { x: [], y: [] } },
    //   ],
    // });
    // await setDoc(doc(firebase.db(), "albums", "beach-waldo"), {
    //   photo:
    //     "https://pbs.twimg.com/media/B-8GP5vUQAAoyi3?format=png&name=medium",
    //   characters: [
    //     { name: "Green Waldo", position: { x: [], y: [] } },
    //     { name: "Blonde Waldo", position: { x: [], y: [] } },
    //     { name: "Brown Waldo", position: { x: [], y: [] } },
    //   ],
    // });
  }

  async function getMapsData() {
    console.log("getMapsData");
    const mapsSnapshot = await getDocs(collection(firebase.db(), "albums"));
    let mapsData = [];

    mapsSnapshot.forEach((map) =>
      mapsData.push({ name: map.id, img: map.data().photo })
    );

    return mapsData;
  }

  return (
    <div>
      {maps.map((map) => {
        return <MapCard name={map.name} imgPath={map.img} />;
      })}
    </div>
  );
}

export default Maps;
