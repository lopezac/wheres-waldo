import styled from "styled-components";
import { NavbarLink, StyledNavbar } from "../../shared/Navbar";

const Navbar = styled(StyledNavbar)`
  grid-area: header;
`;

function TopNavbar() {
  return (
    <Navbar>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/leaderboards">Leaderboards</NavbarLink>
    </Navbar>
  );
}

export default TopNavbar;
