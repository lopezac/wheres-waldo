import styled from "styled-components";

import CharactersNav from "./CharactersNav";
import Timer from "./Timer";

const StyledHeader = styled.header(({theme}) => `
  display: flex;
  justify-content: center;
  background-color: ${theme.lightRed};
  color: ${theme.white};
  border-radius: 10px;
`);

function Header({characters}) {
  return (
    <StyledHeader>
      <CharactersNav characters={characters} />
      <Timer characters={characters} />
    </StyledHeader>
  )
}

export default Header;
