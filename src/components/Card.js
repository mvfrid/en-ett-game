import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';

export const Card = ({ pickedBox, currentQuestionData }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'card',
    item: { pickedBox, currentQuestionData },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const cardClassName = `card ${isDragging ? 'dragging' : ''}`;

  // Connect drag source and preview
  drag(ref);
  preview(ref);

  return (
    <div className={cardClassName} ref={ref}>
      <h2>{currentQuestionData.word}</h2>
      <img src={currentQuestionData.picture} alt={currentQuestionData.word} />
    </div>
  );
};
