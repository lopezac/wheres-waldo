import { array, func } from "prop-types";
import styled from "styled-components";

const TargetDiv = styled.ul(
  ({ theme, x, y }) => `
  position: absolute;
  top: ${y - 25 + "px"};
  left: ${x + 10 + "px"};
  background-color: ${theme.darkZinc};
  padding: 3px;
;
`
);

const Option = styled.li(
  ({ theme }) => `
  color: ${theme.white};
  list-style-type: none;
  font-size: 1rem;
  cursor: pointer;
`
);

function TargetBox({ characters, handleListClick, position }) {
  console.log("position", position);
  return (
    <TargetDiv x={position[0]} y={position[1]}>
      {characters.map((char) => {
        return char.found ? null : (
          <Option key={char.name} onClick={handleListClick}>
            {char.name}
          </Option>
        );
      })}
    </TargetDiv>
  );
}

TargetBox.propTypes = {
  characters: array,
  handleListClick: func,
};

export default TargetBox;
