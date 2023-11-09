// 2.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons.
// Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.

import { useState } from "react";

const FormData = () => {
  const [text, setText] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text, check1, check2, radio1, radio2);
  };
  return (
    <>
      <h3>Form Data</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter some text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        Check1 :
        <input
          type="checkbox"
          checked={check1}
          onChange={(e) => setCheck1(e.target.checked)}
        />
        Check2 :
        <input
          type="checkbox"
          checked={check2}
          onChange={(e) => setCheck2(e.target.checked)}
        />
        Radio1 :
        <input
          type="radio"
          value={radio1}
          onChange={(e) => setRadio1(e.target.checked)}
        />
        Radio2 :
        <input
          type="radio"
          value={radio2}
          onChange={(e) => setRadio2(e.target.checked)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormData;
