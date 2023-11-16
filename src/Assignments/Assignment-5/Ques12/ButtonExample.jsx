import Button from "./Button";

const ButtonExample = () => {
  const handlePrimaryClick = () => {
    console.log("Primary Button Clicked!");
  };
  const handleSecondaryClick = () => {
    console.log("Secondary Button Clicked!");
  };
  const handleDangerClick = () => {
    console.log("Danger Button Clicked!");
  };
  return (
    <div>
      <h1>Reusable button example</h1>
      <Button
        label="Primary"
        onClick={handlePrimaryClick}
        style="primary"
      />
      <Button
        label="Secondary"
        onClick={handleSecondaryClick}
        style="secondary"
      />
      <Button
        label="Danger"
        onClick={handleDangerClick}
        style="danger"
      />
    </div>
  );
};
export default ButtonExample;
