import { func } from "prop-types";

import { Btn } from "../../shared/Button";

function ResetBtn({ resetGame }) {
  return (
    <Btn type="submit" onClick={resetGame}>
      Reset
    </Btn>
  );
}

ResetBtn.propTypes = {
  resetGame: func,
};

export default ResetBtn;
