function TargetBox({ characters, handleListClick }) {
  console.log("characters at targetBox", characters);
  return (
    <ul>
      {characters.map((char) => {
        return char.found ? null : (
          <li key={char.name} onClick={handleListClick}>
            {char.name}
          </li>
        );
      })}
    </ul>
  );
}

export default TargetBox;
