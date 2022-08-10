import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { useOutletContext } from "react-router-dom";

import { MapNameContext } from "../mapName-context";

function Leaderboards() {
  const firebase = useOutletContext();
  const mapName = useContext(MapNameContext);

  const [users, setUsers] = useState([]);
  const [currentMap, setCurrentMap] = useState("beach-waldo");

  useEffect(() => {
    listenDatabase();
  }, []);

  async function listenDatabase() {
    const q = query(
      collection(firebase.db(), `albums/${mapName}/leaderboards`),
      orderBy("time")
    );
    onSnapshot(q, (qSnap) => {
      const data = [];
      qSnap.forEach((doc) => data.push(doc.data()));
      setUsers(data);
      console.log("data at listenDatabsae", data);
    });
  }

  return <div></div>;
}

export default Leaderboards;
