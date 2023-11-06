import { useEffect, useState } from "react";

const useTimer = (duration) => {
  const [timer, setTimer] = useState(duration);
  const [paused, setPaused] = useState(true);
  const resetTimer = () => {
    setTimer(duration);
    setPaused(true);
  };
  const pauseTimer = () => {
    setPaused(true);
  };
  const startTimer = () => {
    setPaused(false);
  };
  useEffect(() => {
    let intervalId;
    if (paused) {
      clearInterval(intervalId);
    } else {
      if (timer > 0) {
        intervalId = setInterval(() => {
          setTimer(timer - 1);
        }, 1000);
      } else {
        clearInterval(intervalId);
      }
    }
    return () => clearInterval(intervalId);
  }, [timer, paused]);

  return [timer, resetTimer, pauseTimer, startTimer];
};

export default useTimer;
