/* eslint-disable prefer-destructuring */
import React from 'react';

export const Messageboard = ({ selectedBox, currentQuestionData }) => {
  // console.log("selectedBox:", selectedBox);
  // console.log("currentQuestionData in Messageboard:", currentQuestionData);

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  // Det rätta svaret från datasetet
  const capitalizedAnswerEnEtt = capitalizeFirstLetter(
    currentQuestionData.answer
  );
  // Det som användaren valde
  const capitalizedSelectedEnEtt = capitalizeFirstLetter(selectedBox);

  const messages = [
    'Dra ordet till den artikel som den tillhör. Lycka till!',
    `${capitalizedAnswerEnEtt} ${currentQuestionData.word}! Helt korrekt!`,
    `${capitalizedSelectedEnEtt} ${currentQuestionData.word} är fel. Tyvärr, försök igen!`
  ];

  let messageToShow;
  let imageToShow;

  if (selectedBox === 'start') {
    messageToShow = messages[0];
    // No image for "start"
    imageToShow = null;
  } else if (selectedBox === currentQuestionData.answer) {
    messageToShow = messages[1];
    // Image URL for correct answer
    imageToShow = 'https://i.postimg.cc/66CN5KQb/icons8-correct-96.png';
  } else {
    messageToShow = messages[2];
    // Image URL for incorrect answer
    imageToShow = 'https://i.postimg.cc/bvx7TH20/icons8-incorrect-64.png';
  }
  return (
    <div className="messageboard">
      <p>{messageToShow}</p>
      {imageToShow && <img src={imageToShow} alt="Feedback" />}
    </div>
  );
};
