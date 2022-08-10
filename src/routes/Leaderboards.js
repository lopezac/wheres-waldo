import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function Leaderboards() {
  const firebase = useOutletContext();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    listenDatabase();
  }, []);

  function formatName(name) {
    return !name ? "Anonymous" : name;
  }

  async function listenDatabase() {
    const q = query(collection(firebase.db(), "leaderboards"), orderBy("time"));
    onSnapshot(q, (qSnap) => {
      const data = [];
      qSnap.forEach((doc) => data.push(doc.data()));
      setUsers(data);
    });
  }

  function getIndex(user) {
    return users.indexOf(user) + 1;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Place</th>
          <th>Name</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {!users.length
          ? null
          : users.map((user) => {
              return (
                <tr key={getIndex(user)}>
                  <td>{getIndex(user)}</td>
                  <td>{user.name}</td>
                  <td>{user.time}</td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
}

export default Leaderboards;
