import { array } from "prop-types";
import { useContext } from "react";
import styled from "styled-components";

import { MapNameContext } from "./mapName-context";

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

const MapImgIcon = styled.img`
  width: 70px;
  height: 70px;
  padding-top: 15px;
`;

const ParaNav = styled.p`
  font-size: 1rem;
  text-align: center;
`;

function CharactersNav({ characters }) {
  const mapName = useContext(MapNameContext);

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
            <MapImgIcon src={getImg(char.name)} alt={char.name} />
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
