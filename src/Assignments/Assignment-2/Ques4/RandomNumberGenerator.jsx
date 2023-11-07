// 4.Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.

import { useState } from "react";

const RandomNumberGenerator = () => {

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100 + 1)
  );
  const handleRandomNumberGeneration = () => {
    setRandomNumber(Math.floor(Math.random() * 100 + 1));
  };
  return (
    <>
      <p>Random number : {randomNumber}</p>
      <button onClick={handleRandomNumberGeneration}>
        Generate Random Number
      </button>
    </>
  );
};

export default RandomNumberGenerator;
