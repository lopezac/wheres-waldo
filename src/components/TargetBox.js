function TargetBox({ characters, handleListClick }) {
  return (
    <ul>
      {characters.map((char) => {
        return (
          <li key={char} onClick={handleListClick}>
            {char}
          </li>
        );
      })}
    </ul>
  );
}

export default TargetBox;
