function Button({ text, color }) {
  return (
    <>
      <button style={{ backgroundColor: color, margin: "5px" }}>{text}</button>
    </>
  );
}
export default Button;
