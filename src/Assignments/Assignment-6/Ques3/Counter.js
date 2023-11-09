import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h4>{counter}</h4>
      <button data-testid="inc" onClick={() => setCounter(counter + 1)}>
        Inc
      </button>
      <button data-testid="dec" onClick={() => setCounter(counter - 1)}>
        desc
      </button>
    </>
  );
};
export default Counter;
