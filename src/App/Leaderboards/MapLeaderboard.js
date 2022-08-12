import { array } from "prop-types";

import TableBody from "./TableBody";

function MapLeaderboard({ users }) {
  if (!users.length) return <p>No best scores yet be the first!</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Place</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <TableBody users={users} />
      </table>
    </div>
  );
}

MapLeaderboard.propTypes = {
  users: array,
};

export default MapLeaderboard;
