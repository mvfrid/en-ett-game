import React from 'react';
import './Cards.css';

export const CardPreview = ({ data }) => {
  if (!data || !data.currentQuestionData) {
    return null;
  }

  // Determine if the word is short, medium, or long.
  const isShortWord = data.currentQuestionData.word.length < 5;
  const isLongWord = data.currentQuestionData.word.length > 8;

  let wordLengthClass = '';
  if (isShortWord) {
    wordLengthClass = 'shortWord';
  } else if (isLongWord) {
    wordLengthClass = 'longWord';
  } else {
    wordLengthClass = '';
  }

  const cardClassName = `card-preview ${wordLengthClass}`;

  return (
    <div className={cardClassName}>
      <div className="card-text-box">
        <h2>{data.currentQuestionData.word}</h2>
        <p>({data.currentQuestionData.translation})</p>
      </div>
      <img src={data.currentQuestionData.picture} alt={data.currentQuestionData.word} />
    </div>
  );
};
