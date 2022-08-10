import { useEffect, useState } from "react";
import { array } from "prop-types";

import LogTimeModal from "./LogTimeModal";

function Timer({ characters }) {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;
    setTimeout(() => setTime(time + 1), 1000);
  }, [time, isActive]);

  useEffect(() => {
    if (!characters.length || !characters.every((char) => char.found)) return;
    setIsActive(false);
  }, [characters]);

  return (
    <div>
      <p>{time}s</p>
      {!isActive && <LogTimeModal time={time} />}
    </div>
  );
}

Timer.propTypes = {
  characters: array,
};

export default Timer;
