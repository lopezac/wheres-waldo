import { collection, getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import MapCard from "./MapCard";

function Maps() {
  const firebase = useOutletContext();
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    getMapsData().then((mapsData) => setMaps(mapsData));
  }, []);

  async function getMapsData() {
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
        return (
          <MapCard name={map.name} imgPath={map.img} />
        );
      })}
    </div>
  );
}

export default Maps;
