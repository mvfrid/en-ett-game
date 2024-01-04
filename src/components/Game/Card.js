import React, { useRef } from 'react';
import './Cards.css';
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

  // Determine if the word is short for the smallest media query.
  const isShortWord = window.innerWidth < 500 && currentQuestionData.word.length < 6;

  const cardClassName = `card ${isDragging ? 'dragging' : ''} ${isShortWord ? 'smallWord' : ''}`;

  // Connect drag source and preview
  drag(ref);
  preview(ref);

  return (
    <div className={cardClassName} ref={ref}>
      <div className="card-text-box">
        <h2>{currentQuestionData.word}</h2>
        <p>({currentQuestionData.translation})</p>
      </div>
      <img src={currentQuestionData.picture} alt={currentQuestionData.word} />
    </div>
  );
};
