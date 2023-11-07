// 19.Build a custom hook named useTimer for creating countdown timers.
// Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals.
// Return the current timer value and methods to start, pause, and reset the timer.
// Develop a component that utilizes the useTimer hook to display and control a countdown.

import useTimer from "./useTimer";

const Countdown = () => {
  
  const [timer, reset, pause, start] = useTimer(20);
  const handleStartTimer = () => {
    start();
  };
  const handlePauseTimer = () => {
    pause();
  };
  const handleResetTimer = () => {
    reset();
  };

  return (
    <>
      <h3>Countdown timer : {timer}</h3>
      <button onClick={handleStartTimer}>Start timer</button>
      <button onClick={handlePauseTimer}>Pause timer</button>
      <button onClick={handleResetTimer}>Reset timer</button>
    </>
  );
};

export default Countdown;
