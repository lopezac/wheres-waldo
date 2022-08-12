import { func, array } from "prop-types";

import { formatName } from "../../shared/formatUtils";

function MapSelector({ handleChange, maps }) {
  return (
    <select onChange={handleChange}>
      {maps.map((map) => {
        return (
          <option key={map} value={map}>
            {formatName(map)}
          </option>
        );
      })}
    </select>
  );
}

MapSelector.propTypes = {
  handleChange: func,
  maps: array,
};

export default MapSelector;
