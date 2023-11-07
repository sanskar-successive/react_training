// 5.Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.

import { useState } from "react";

const CounterWithStep = () => {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const handleIncrement = () => {
    setCount(count + parseInt(step));
  };
  const handleDecrement = () => {
    setCount(count - parseInt(step));
  };
  
  return (
    <>
      <p>Step Counter : {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input
        value={step}
        onChange={(e) => setStep(e.target.value)}
        type="number"
        placeholder="Enter step"
      />
    </>
  );
};

export default CounterWithStep;
