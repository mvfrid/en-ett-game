import React from 'react';
import { useDrag } from 'react-dnd';

export const Card = ({ pickedBox, currentQuestionData }) => {
  const [, ref] = useDrag({
    type: 'card',
    item: { pickedBox }
  });
  // console.log("pickedBox", { pickedBox });
  // console.log("currentQuestionData", currentQuestionData);

  return (
    <div className="card" ref={ref}>
      <h2>{currentQuestionData.word}</h2>
      <img src={currentQuestionData.picture} alt={currentQuestionData.word} />
    </div>
  );
};
