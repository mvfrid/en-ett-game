/* eslint-disable prefer-destructuring */
import React from 'react';
import { capitalizeFirstLetter } from '../../helper/utils.js';

export const Messageboard = ({ selectedBox, currentQuestionData }) => {
  // console.log("selectedBox:", selectedBox);
  // console.log("currentQuestionData in Messageboard:", currentQuestionData);

  // Det rätta svaret från datasetet
  const capitalizedAnswerEnEtt = capitalizeFirstLetter(
    currentQuestionData.answer
  );
  // Det som användaren valde
  const capitalizedSelectedEnEtt = capitalizeFirstLetter(selectedBox);

  const messages = [
    'Dra ordet till den artikel som det tillhör. Lycka till!',
    `${capitalizedAnswerEnEtt} ${currentQuestionData.word}! Helt korrekt!`,
    `${capitalizedSelectedEnEtt} ${currentQuestionData.word} är fel. Tyvärr, bättre lycka nästa gång!`
  ];

  let messageToShow;
  let imageToShow;

  if (selectedBox === currentQuestionData.answer) {
    messageToShow = messages[1]; // Correct answer message
    imageToShow = 'https://i.postimg.cc/66CN5KQb/icons8-correct-96.png';
  } else if (selectedBox !== 'start') {
    messageToShow = messages[2]; // Incorrect answer message
    imageToShow = 'https://i.postimg.cc/bvx7TH20/icons8-incorrect-64.png';
  } else {
    messageToShow = messages[0]; // Message for 'start'
    // No image for "start"
    imageToShow = null;
  }
  return (
    <div className="messageboard">
      <p>{messageToShow}</p>
      {imageToShow && <img src={imageToShow} alt="Feedback" />}
    </div>
  );
};
