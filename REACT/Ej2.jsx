/**You are tasked with creating a simple React application called "Basic Slideshow" that displays a series of slides and allows users to navigate through them. The application requirements are detailed below, and the finished application must pass all of the unit tests.

image



Detailed Requirements

The Slides component takes an array of slides as a prop. Each element of this array denotes a single slide and is an object with two properties: a string title and a string text.
When the application loads, the first slide must be rendered.
Clicking on the "Next" button shows the next slide. This button should be disabled when the current slide is the last one.
Clicking on the "Prev" button shows the previous slide. This button should be disabled when the current slide is the first one.
Clicking on the "Restart" button returns to the first slide. This button should be disabled when the current slide is the first one.
You can assume that the passed slides array contains at least one slide.


Sample Interaction
Initial State

The first slide is displayed.
The "Prev" and "Restart" buttons are disabled.
User Action 1

User clicks "Next" button.
The next slide is displayed.
The "Prev" and "Restart" buttons are enabled.
User Action 2

User clicks "Prev" button.
The previous slide is displayed.
The "Prev" button is disabled if the first slide is shown.
User Action 3 - User clicks "Restart" button. - The first slide is displayed. - The "Prev" and "Restart" buttons are disabled. */

import React, { useState } from "react";

function Slides({ slides }) {
  const [indexMostrar, setIndexMostrar] = useState(0);

  const handleNext = () => {
    if (indexMostrar < slides.length - 1) {
      setIndexMostrar(indexMostrar + 1);
    }
  };

  const handlePrev = () => {
    if (indexMostrar > 0) {
      setIndexMostrar(indexMostrar - 1);
    }
  };

  const handleRestart = () => {
    setIndexMostrar(0);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={handleRestart}
          data-testid="button-restart"
          className="small outlined"
          disabled={indexMostrar === 0}
        >
          Restart
        </button>
        <button
          onClick={handlePrev}
          data-testid="button-prev"
          className="small"
          disabled={indexMostrar === 0}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          data-testid="button-next"
          className="small"
          disabled={indexMostrar === slides.length - 1}
        >
          Next
        </button>
      </div>

      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[indexMostrar].title}</h1>
        <p data-testid="text">{slides[indexMostrar].text}</p>
      </div>
    </div>
  );
}

export default Slides;