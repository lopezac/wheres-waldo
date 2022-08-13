import { func, array } from "prop-types";
import styled from "styled-components";

import { formatName } from "../../shared/formatUtils";

const Select = styled.select(
  ({ theme }) => `
    border: none;
    border-radius: 3px;
    padding: 5px;
    font-size: 1.5rem;
    background-color: ${theme.darkBlue};
    color: ${theme.white};
    cursor: pointer;
`
);

function MapSelector({ handleChange, maps }) {
  return (
    <Select onChange={handleChange}>
      {maps.map((map) => {
        return (
          <option key={map} value={map}>
            {formatName(map)}
          </option>
        );
      })}
    </Select>
  );
}

MapSelector.propTypes = {
  handleChange: func,
  maps: array,
};

export default MapSelector;
