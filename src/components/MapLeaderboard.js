function MapLeaderboard({ users }) {
  function formatName(name) {
    return !name ? "Anonymous" : name;
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
                  <td>{formatName(user.name)}</td>
                  <td>{user.time}</td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
}

export default MapLeaderboard;
