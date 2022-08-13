import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { StyledNavbar } from "../../shared/Navbar";

const StyledFooter = styled(StyledNavbar)`
  grid-area: footer;
  display: flex;
  justify-content: center;
`;

const Para = styled.p(
  ({ theme }) => `
  display: flex;
  column-gap: 10px;
  align-items: center;
  color: ${theme.white};
  margin: 0;
`
);

const Anchor = styled.a(
  ({ theme }) => `
  color: ${theme.white};
  text-decoration: none;
  padding-top: 2px;
`
);

function Footer() {
  return (
    <StyledFooter>
      <Para>
        Axel C. Lopez @Copyright 2022{" "}
        <Anchor href="https://github.com/lopezac">
          <FaGithub />
        </Anchor>
      </Para>
    </StyledFooter>
  );
}

export default Footer;
