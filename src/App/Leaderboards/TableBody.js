import { array } from "prop-types";
import styled from "styled-components";

const Place = styled.td(
  ({ theme }) => `
  background-color: ${theme.lightRed};
  color: white;
  font-size: 1.5rem;
`
);

const Name = styled.td`
  min-width: 250px;
`;

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
            <Place>{getIndex(user)}</Place>
            <Name>{formatName(user.name)}</Name>
            <td>{user.time}s</td>
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
