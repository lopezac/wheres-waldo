import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import MapLeaderboard from "./MapLeaderboard";
import MapSelector from "./MapSelector";

function LeaderboardsIndex() {
  const firebase = useOutletContext();

  const [users, setUsers] = useState([]);
  const [maps, setMaps] = useState([]);
  const [currentMap, setCurrentMap] = useState(null);

  useEffect(() => {
    getMaps().then((result) => setMaps(result));
  }, []);

  useEffect(() => {
    getUsers();
  }, [currentMap]);

  async function getUsers() {
    const q = query(
      collection(firebase.db(), `albums/${currentMap}/leaderboards`),
      orderBy("time")
    );
    onSnapshot(q, (qSnap) => {
      const data = [];
      qSnap.forEach((doc) => data.push(doc.data()));
      setUsers(data);
    });
  }

  async function getMaps() {
    const mapsSnap = await getDocs(collection(firebase.db(), "albums"));
    const mapsName = [];

    mapsSnap.forEach((map) => mapsName.push(map.id));

    return mapsName;
  }

  async function handleChange(event) {
    setCurrentMap(event.target.value);
  }

  return (
    <div>
      <MapSelector maps={maps} handleChange={handleChange} />
      <MapLeaderboard users={users} />
    </div>
  );
}

export default LeaderboardsIndex;
