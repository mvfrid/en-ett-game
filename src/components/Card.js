import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';

export const Card = ({ pickedBox, currentQuestionData }) => {
  const ref = useRef(null);
  const [, drag, preview] = useDrag({
    type: 'card',
    item: { pickedBox },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  // Connect drag source and preview
  drag(ref);
  preview(ref);

  return (
    <div className="card" ref={ref}>
      <h2>{currentQuestionData.word}</h2>
      <img src={currentQuestionData.picture} alt={currentQuestionData.word} />
    </div>
  );
};
