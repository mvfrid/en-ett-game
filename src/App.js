import './index.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game } from './reducers/game';
import { Header } from './components/Header.js';
import { Gameboard } from './components/Game/Gameboard.js';
import { Menu } from './components/Menu.js';

export const App = () => {
  const dispatch = useDispatch();
  const [showGameboard, setShowGameboard] = useState(false);
  // const gameStart = useSelector((state) => state.game.gameStart);
  const updatedInitialState = useSelector((state) => state.game);
  const currentQuestionIndex = useSelector(
    (state) => state.game.currentQuestionIndex
  );

  console.log(
    'Updated Initial State:',
    updatedInitialState,
    'currentQuestionIndex',
    currentQuestionIndex
  );

  const handleMenuButtonClick = () => {
    setShowGameboard(false);
    dispatch(game.actions.endTheGame());
  };

  const handlePlayButtonClick = () => {
    setShowGameboard(true);
    console.log('handlePlayButtonClick har nu körts');
    // Dispatch the "startTheGame" action when the "Play" button is clicked
    dispatch(game.actions.startTheGame());
  };

  const handlePracticeButtonClick = () => {
    setShowGameboard(true);
    console.log('handlePracticeButtonClick har nu körts');
    // Dispatch the "startTheGame" action when the "Play" button is clicked
    dispatch(game.actions.startTheGame());
  };

  return (
    <div className="main">
      <Header />
      {showGameboard ? (
        <Gameboard />
      ) : (
        <Menu
          onPlayButtonClick={handlePlayButtonClick}
          onPracticeButtonClick={handlePracticeButtonClick} />
      )}
      {showGameboard && (
        <button
          className="iconbox backbtn"
          type="button"
          onClick={handleMenuButtonClick}>
          <img src="/logos/logoback2c.png" alt="go back button" className="backbtnimg" />
          <p>Hem</p>
        </button>
      )}
    </div>
  );
}

/*
import React from 'react'
import { Header } from './components/Header.js';
import { Gameboard } from './components/Gameboard.js';
// import { Menu } from './components/Menu.js';

export const App = () => {
  return (
    <div className="main">
      <Header />
      <Gameboard />
    </div>
  )
}
*/
