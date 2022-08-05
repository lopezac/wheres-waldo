import { useParams } from "react-router-dom";

function Game() {
  const mapName = useParams().mapName;

  return <div>Game {mapName}</div>;
}

export default Game;
