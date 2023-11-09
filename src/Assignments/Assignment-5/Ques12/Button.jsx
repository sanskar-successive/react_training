const Button = ({ label, style, buttonClick }) => {
  let buttonClass = "button";
  if (style === "primary") {
    buttonClass += " button-primary";
  } else if (style === "secondary") {
    buttonClass += " button-secondary";
  } else if (style === "danger") {
    buttonClass += " button-danger";
  }
  return (
    <>
      <button className="buttonClass" onClick={buttonClick}>{label}</button>
    </>
  );
};
export default Button;
