import { array, func } from "prop-types";

function TargetBox({ characters, handleListClick }) {
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

TargetBox.propTypes = {
  characters: array,
  handleListClick: func,
};

export default TargetBox;
