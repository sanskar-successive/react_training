// 8.Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit.
// Implement controlled components for both inputs. When the user enters a value in one input, the other
// input should update with the converted temperature.

import { useState } from "react";

const TemperatureConverter = () => {
  const [temp, setTemp] = useState({ celsius: 0, fahrenheit: 32 });
  const convertCtoF = (C) => {
    return (C * 9.0) / 5.0 + 32.0;
  };
  const convertFtoC = (F) => {
    return (5.0 * (F * 1.0 - 32.0)) / 9.0;
  };
  const handleCelsiusChange = (e) => {
    setTemp({
      celsius: e.target.value,
      fahrenheit: convertCtoF(e.target.value),
    });
  };
  const handleFahrenheitChange = (e) => {
    setTemp({
      celsius: convertFtoC(e.target.value),
      fahrenheit: e.target.value,
    });
  };

  return (
    <>
      <h3>Temperature Converter</h3>
      <input
        type="number"
        placeholder="°C"
        value={temp.celsius}
        onChange={handleCelsiusChange}
      />
      <input
        type="number"
        placeholder="°F"
        value={temp.fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </>
  );
};

export default TemperatureConverter;
