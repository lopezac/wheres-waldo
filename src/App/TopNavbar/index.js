import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  grid-area: header;
`;

function TopNavbar() {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/leaderboards">Leaderboards</Link>
    </StyledNavbar>
  );
}

export default TopNavbar;
