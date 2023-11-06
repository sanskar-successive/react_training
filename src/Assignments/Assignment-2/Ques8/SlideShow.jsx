// 8.Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

import { useEffect, useState } from "react";

const SlideShow = () => {
  
  const [pause, setPause] = useState(false);
  const elements = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
  let [currentIndex, setCurrentIndex] = useState(0);
  currentIndex %= elements.length;
  useEffect(() => {
    let timeoutId;
    if (!pause) {
      timeoutId = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1000);
    } else {
      clearTimeout(timeoutId);
    }
    return () => clearTimeout(timeoutId);
  }, [currentIndex, pause]);

  const handlePlay = () => {
    setPause(false);
  };
  const handlePause = () => {
    setPause(true);
  };

  return (
    <>
      <div>
        <h4>Slide Show</h4>
        <p>{elements[currentIndex]}</p>
        <img
          style={{ height: "10rem", width: "10rem" }}
          src={`/${elements[currentIndex]}`}
          alt={`Slide ${currentIndex}`}
        />
      </div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
};

export default SlideShow;
