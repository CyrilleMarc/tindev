import React, { useState } from "react";
import "../assets/styles/QuestionCm.css";
import slides from "../pages/Slides.js";

const QuestionsCm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});

  const handlePrevious = () => {
    const previousIndex = currentIndex - 1;
    setCurrentIndex(previousIndex < 0 ? slides.length - 1 : previousIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex >= slides.length ? 0 : nextIndex);
  };

  const handleOptionChange = (event) => {
    if (slides[currentIndex].type === "multiple") {
      setResponses({ ...responses, [currentIndex]: event.target.value });
    } else if (slides[currentIndex].type === "checkbox") {
      setResponses({
        ...responses,
        [currentIndex]: event.target.checked
          ? [...(responses[currentIndex] || []), event.target.value]
          : (responses[currentIndex] || []).filter(
              (value) => value !== event.target.value
            ),
      });
    }
  };

  return (
    <div className="carousselContainer">
    <div className="buttonTitle">
      <span onClick={handlePrevious} class="material-symbols-outlined">
        arrow_circle_left
      </span>
        <h3>{slides[currentIndex].question}</h3>
        <span onClick={handleNext} class="material-symbols-outlined">
        arrow_circle_right
      </span>
      </div>
      <div className="contentQuestion">
        {slides[currentIndex].options.map((option) => (
          <div className="gridOptions" key={option}>
            {slides[currentIndex].type === "multiple" ? (
              <input
                type="radio"
                name={currentIndex}
                value={option}
                checked={responses[currentIndex] === option}
                onChange={handleOptionChange}
              />
            ) : (
              <input
                type="checkbox"
                value={option}
                checked={(responses[currentIndex] || []).includes(option)}
                onChange={handleOptionChange}
              />
            )}
            <label>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsCm;
