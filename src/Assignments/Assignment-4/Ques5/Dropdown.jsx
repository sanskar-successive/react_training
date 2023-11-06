// 5.Construct a select dropdown menu with multiple options. Control the selected option using state.
// When an option is selected, display a message showing the selected value.

import { useState } from "react";

const Dropdown = () => {
  const list = [
    "option1",
    "option2",
    "option3",
    "option4",
    "option5",
    "option6",
  ];
  const [selectedItem, setSelectedItem] = useState("");
  const handleSelect = (e) => {
    if (e.target.value === "select") setSelectedItem("");
    else setSelectedItem(e.target.value);
  };

  return (
    <>
      <h3>Dropdown</h3>
      <select onChange={handleSelect}>
        <option>select</option>
        {list.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <h4>{selectedItem}</h4>
    </>
  );
};

export default Dropdown;
