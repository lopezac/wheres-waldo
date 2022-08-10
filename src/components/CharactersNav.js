function CharactersNav({ mapName, characters }) {
  function getImg(charName) {
    return `./assets/${mapName}-${charName
      .toLowerCase()
      .split(" ")
      .join("-")}.jpg`;
  }

  if (!characters) return;
  return (
    <nav>
      {characters.map((char) => {
        return (
          <div>
            <img src={getImg(char.name)} alt={char.name} />
            <p>{char.name}</p>
          </div>
        );
      })}
    </nav>
  );
}

export default CharactersNav;
