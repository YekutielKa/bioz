import React, { useState } from "react";

function Options({ randomTranslation, correctTransletion }) {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const options = [].concat(randomTranslation, correctTransletion);

  const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

  const optionsShafle = shuffle(options);

  return (
    <div>
      {optionsShafle.map((optia) => {
        return (
          <button 
            className="button"
            key={optia}
            onClick={() => {
              if (optia === correctTransletion) {
                setCorrect(correct + 1); 
              
              } else {
                setIncorrect(incorrect + 1);
              }
            }}
          >
            {optia}
          </button>
        );
      })}
      <h4>
        correct {correct} || {incorrect} incorrect
      </h4>
    </div>
  );
}

export default Options;
