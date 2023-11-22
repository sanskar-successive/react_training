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
      <Button styles="primary" onClick={handlePrimaryClick}>
        Primary
      </Button>
      <Button styles="secondary" onClick={handleSecondaryClick}>
        Secondary
      </Button>
      <Button styles="danger" onClick={handleDangerClick}>
        Danger
      </Button>
    </div>
  );
};
export default ButtonExample;
