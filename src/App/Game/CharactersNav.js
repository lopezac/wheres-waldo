import { array } from "prop-types";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import CharIcon from "./CharIcon";

const NavImgs = styled.nav`
  display: flex;
  column-gap: 15px;
`;

const NavItem = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

// const MapIconFounded = styled(MapImgIcon)`
//   background-color: blue;
//   border: 2px solid yellow;
// `;

const ParaNav = styled.p`
  font-size: 1rem;
  text-align: center;
`;

function CharactersNav({ characters }) {
  const mapName = useParams().mapName;

  function getImg(charName) {
    return `./assets/${mapName}-${charName
      .toLowerCase()
      .split(" ")
      .join("-")}.jpg`;
  }

  if (!characters) return;

  return (
    <NavImgs>
      {characters.map((char) => {
        return (
          <NavItem>
            <CharIcon imgPath={getImg(char.name)} name={char.name} founded={char.found} />
            <ParaNav>{char.name}</ParaNav>
          </NavItem>
        );
      })}
    </NavImgs>
  );
}

CharactersNav.propTypes = {
  characters: array,
};

export default CharactersNav;
