import { useEffect, useState, useContext } from "react";
import { array } from "prop-types";
import styled from "styled-components";
import {ResetTimeContext} from "./resetTime-context";

import LogTimeModal from "./LogTimeModal";

const TimerDiv = styled.div`
  display: flex;
  align-items: center;
`;

const TimePara = styled.p`
  font-size: 3rem;
`;

function Timer({ characters }) {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const resetTime = useContext(ResetTimeContext);

  useEffect(() => {
    if (!isActive) return;
    setTimeout(() => setTime(time + 1), 1000);
  }, [time, isActive]);

  useEffect(() => {
    if (!characters.length || !characters.every((char) => char.found)) return;
    setIsActive(false);
  }, [characters]);

  useEffect(() => {
    setTime(0);
    setIsActive(true);
  }, [resetTime]);

  return (
    <TimerDiv>
      <TimePara>{time}s</TimePara>
      {!isActive && <LogTimeModal time={time} />}
    </TimerDiv>
  );
}

Timer.propTypes = {
  characters: array,
};

export default Timer;
