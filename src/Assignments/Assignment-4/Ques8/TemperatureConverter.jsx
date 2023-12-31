// 8.Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit.
// Implement controlled components for both inputs. When the user enters a value in one input, the other
// input should update with the converted temperature.

import { useState } from "react";
import { convertCtoF, convertFtoC } from "./ConverterFunctions";

const TemperatureConverter = () => {
  const [temp, setTemp] = useState({ celsius: 0, fahrenheit: 32 });
  const handleCelsiusChange = (e) => {
    const {value} = e.target;
    setTemp({
      celsius: value,
      fahrenheit: convertCtoF(value),
    });
  };
  const handleFahrenheitChange = (e) => {
    const {value} = e.target;
    setTemp({
      celsius: convertFtoC(value),
      fahrenheit: value,
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
