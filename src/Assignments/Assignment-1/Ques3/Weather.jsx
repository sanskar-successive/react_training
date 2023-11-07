const Weather = ({ temperature }) => {
  let weatherComment = "Normal";
  if (parseFloat(temperature) > 25) {
    weatherComment = "It's sunny today!";
  } else if (parseFloat(temperature) < 10) {
    weatherComment = "It's cold today!";
  }
  return (
    <>
      <h2>
        {weatherComment} because temperature is {temperature} degree celsius.
      </h2>
    </>
  );
};
export default Weather;
