import { array } from "prop-types";
import styled from "styled-components";

import TableBody from "./TableBody";

const StyledTable = styled.table(
  ({ theme }) => `
  border-collapse: collapse;
  font-size: 1.3rem;
  background-color: ${theme.lightZinc};
  border-radius: 5px;

  th,
  td {
    padding: 5px;
  }
`
);

const Header = styled.th(
  ({ theme }) => `
  background-color: ${theme.zinc};
`
);

function MapLeaderboard({ users }) {
  if (!users.length) return <p>No best scores yet be the first!</p>;

  return (
    <StyledTable>
      <thead>
        <tr>
          <Header>Place</Header>
          <Header>Name</Header>
          <Header>Time</Header>
        </tr>
      </thead>
      <TableBody users={users} />
    </StyledTable>
  );
}

MapLeaderboard.propTypes = {
  users: array,
};

export default MapLeaderboard;
