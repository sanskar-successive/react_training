// 1.Create a React component with an input field. Implement it as a controlled component where the input
// value is controlled by the component's state. When the user types into the input field,
// the component's state should update accordingly.

import { useState } from "react";

const ControlledComponent = () => {
  const [state, setState] = useState("");
  return (
    <>
      <h3>Controlled Component</h3>
      <input
        type="text"
        placeholder="Enter some text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <p>{state}</p>
    </>
  );
};

export default ControlledComponent;
