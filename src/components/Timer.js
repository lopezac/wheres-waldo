import { useEffect, useState } from "react";

function Timer({ characters }) {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;
    console.log("time: ", time);
    setTimeout(() => setTime(time + 1), 1000);
  }, [time]);

  useEffect(() => {
    if (characters.every((char) => char.found)) setIsActive(false);
    console.log("time to found all was ", time);
  }, [characters]);
}

export default Timer;
