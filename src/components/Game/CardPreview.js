import React from 'react';
import './Cards.css';

export const CardPreview = ({ data }) => {
  if (!data || !data.currentQuestionData) {
    return null;
  }

  return (
    <div className="card-preview">
      <div className="card-text-box">
        <h2>{data.currentQuestionData.word}</h2>
        <p>({data.currentQuestionData.translation})</p>
      </div>
      <img src={data.currentQuestionData.picture} alt={data.currentQuestionData.word} />
    </div>
  );
};
