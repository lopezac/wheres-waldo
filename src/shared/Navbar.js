import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(
  ({ theme }) => `
  text-decoration: none;
  color: ${theme.darkZinc};
`
);

export const StyledNavbar = styled.nav(
  ({ theme }) => `
  background-color: ${theme.darkBlue};
  display: flex;
  padding: 7px 0 7px 12px;
  column-gap: 10px;
`
);

export const NavbarLink = styled(StyledLink)(
  ({ theme }) => `
  color: ${theme.white};
  font-size: 1.2rem;
  `
);
