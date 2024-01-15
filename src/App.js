import './index.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game } from './reducers/game';
import { Header } from './components/Header.js';
import { Gameboard } from './components/Game/Gameboard.js';
import { Menu } from './components/Menu.js';
import { preloadData, preloadImages } from './helper/utils.js';

export const App = () => {
  const dispatch = useDispatch();
  const [showGameboard, setShowGameboard] = useState(false);
  // const gameStart = useSelector((state) => state.game.gameStart);
  const updatedInitialState = useSelector((state) => state.game);
  const selectedWords = useSelector((state) => state.game.setOfQuestions);
  const currentQuestionIndex = useSelector(
    (state) => state.game.currentQuestionIndex
  );

  console.log(
    'index',
    currentQuestionIndex,
    'Current State:',
    updatedInitialState
  );

  console.log('selectedWords inside App', selectedWords)

  const handleMenuButtonClick = () => {
    setShowGameboard(false);
    dispatch(game.actions.endTheGame());
  };

  const handlePlayButtonClick = () => {
    setShowGameboard(true);
    console.log('handlePlayButtonClick har nu körts');
    // Dispatch the "startTheGame" action when the "Play" button is clicked
    dispatch(game.actions.startTheGame());
    preloadData();
    preloadImages(selectedWords); // Call the preload function here
  };

  // This useEffect will trigger whenever 'selectedWords' changes
  useEffect(() => {
    if (selectedWords.length > 0) {
      preloadImages(selectedWords);
    }
  }, [selectedWords]); // Dependency array with 'selectedWords'

  const handlePracticeButtonClick = () => {
    console.log('handlePracticeButtonClick har nu körts');
    // Dispatch the "xxx" action when the "Practice" button is clicked
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
