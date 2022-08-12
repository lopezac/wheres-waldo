import { array } from "prop-types";

function TableBody({ users }) {
  function formatName(name) {
    return !name ? "Anonymous" : name;
  }

  function getIndex(user) {
    return users.indexOf(user) + 1;
  }

  return (
    <tbody>
      {users.map((user) => {
        return (
          <tr key={getIndex(user)}>
            <td>{getIndex(user)}</td>
            <td>{formatName(user.name)}</td>
            <td>{user.time}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

TableBody.propTypes = {
  users: array,
};

export default TableBody;
