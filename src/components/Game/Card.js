import React, { useRef, useEffect } from 'react';
import './Cards.css';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

export const Card = ({ pickedBox, currentQuestionData }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'card',
    item: { pickedBox, currentQuestionData },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  // Determine if the word is short, medium, or long.
  const isShortWord = currentQuestionData.word.length < 5;
  const isLongWord = currentQuestionData.word.length > 8;

  let wordLengthClass = '';
  if (isShortWord) {
    wordLengthClass = 'shortWord';
  } else if (isLongWord) {
    wordLengthClass = 'longWord';
  } else {
    wordLengthClass = '';
  }

  const cardClassName = `card ${isDragging ? 'dragging' : ''} ${wordLengthClass}`;

  // Connect drag source and preview
  drag(ref);

  // Connect the drag source and specify the drag preview
  // Gör att default preview försvinner för web
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <>
      <DragPreviewImage connect={preview} src={getEmptyImage()} />
      <div className={cardClassName} ref={ref}>
        <div className="card-text-box">
          <h2>{currentQuestionData.word}</h2>
          <p>({currentQuestionData.translation})</p>
        </div>
        <img src={currentQuestionData.picture} alt={currentQuestionData.word} />
      </div>
    </>
  );
};
