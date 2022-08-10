import { func } from "prop-types";

function ResetBtn({ resetGame }) {
  return (
    <button type="submit" onClick={resetGame}>
      Reset
    </button>
  );
}

ResetBtn.propTypes = {
  resetGame: func,
};

export default ResetBtn;
