import React from 'react';
// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { game } from '../reducers/game';

export const Summary = () => {
  // const dispatch = useDispatch();
  const score = useSelector((store) => store.game.score);
  const setOfQuestions = useSelector((state) => state.game.setOfQuestions);

  // Ha en separat knapp här som skickar iväg resultatet och sen återvänder hem?
  // Nu har vi MenuBackBtn, där man kan avbryta spelet.
  return (
    <div className="summary">
      <h2>Resultat</h2>
      <p className="score">
        Du hade {score} rätt av {setOfQuestions.length}
      </p>
      {score < 2 && <p>Öva lite mer till nästa gång...</p>}
      {score >= 2 && score < 4 && <p>Inte så illa!</p>}
      {score >= 4 && <p>Bra jobbat!</p>}

    </div>
  );
};

/*       <button
        className="iconbox backbtn"
        type="button"
        onClick={handleReplayButtonClick}>
        <img src="/logos/logoback2c.png" alt="go back button" className="backbtnimg" />
        <p>Spela igen</p>
      </button>

        const handleReplayButtonClick = () => {
    // setShowGameboard(true);
    console.log('handlePlayButtonClick har nu körts');
    // Dispatch the "startTheGame" action when the "Play" button is clicked
    dispatch(game.actions.startTheGame());
  };
      */