import React from 'react';

export const CardPreview = ({ data }) => {
  if (!data || !data.currentQuestionData) {
    return null;
  }

  return (
    <div className="card-preview">
      <h2>{data.currentQuestionData.word}</h2>
      <img src={data.currentQuestionData.picture} alt={data.currentQuestionData.word} />
    </div>
  );
};
