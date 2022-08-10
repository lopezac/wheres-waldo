import { useEffect, useState } from "react";

import LogTimeModal from "./LogTimeModal";

function Timer({ characters }) {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;
    // console.log("time: ", time);
    setTimeout(() => setTime(time + 1), 1000);
  }, [time, isActive]);

  useEffect(() => {
    if (!characters.length || !characters.every((char) => char.found)) return;
    setIsActive(false);
    // console.log("time to found all was ", time, characters);
  }, [characters]);

  return (
    <div>
      <p>{time}s</p>
      {!isActive && <LogTimeModal time={time} />}
    </div>
  );
}

export default Timer;
