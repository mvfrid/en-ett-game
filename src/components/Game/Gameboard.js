import React, { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { Preview } from 'react-dnd-preview';
import { Card } from './Card.js';
import { BoxEn } from './BoxEn.js';
import { BoxEtt } from './BoxEtt.js';
import { CustomDragLayer } from './CustomDragLayer.js';
import { CardContainer } from './CardContainer.js';
import { Messageboard } from './Messageboard.js';
import { Summary } from '../Summary.js';
import { game } from '../../reducers/game.js';

export const Gameboard = () => {
  const initialCardPosition = { container: 'start' };
  const [cardPosition, setCardPosition] = useState(initialCardPosition);
  const [boxesDisabled, setBoxesDisabled] = useState(false);

  const dispatch = useDispatch();
  // const store = useSelector((state) => state.game);
  const score = useSelector((store) => store.game.score);
  const gameOver = useSelector((state) => state.game.gameOver);
  const setOfQuestions = useSelector((state) => state.game.setOfQuestions);
  const currentQuestionIndex = useSelector(
    (state) => state.game.currentQuestionIndex
  );

  // Checks if the user is on a touch device (mobile, etc)
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  // Determine the appropriate Dnd-backend based on the device
  const backend = isTouchDevice() ? TouchBackend : HTML5Backend;

  const handleDrop = (targetContainer) => {
    // targetContainer represents the identifier of the container where the card is dropped.
    setCardPosition({ container: targetContainer });
    // Disable the boxes when card have been dropped, to prevent changing answer.
    setBoxesDisabled(true);

    // Skip the timeout logic if the card is dropped in the "start" container
    if (targetContainer === 'start') {
      setBoxesDisabled(false); // Un-disable the boxes if card is back in 'start'
      return; // Exit the function early
    }

    // Store correct answer for the question in a variable
    const correctAnswer = setOfQuestions[currentQuestionIndex].answer;
    // Check if the dropped card's container matches the correct answer
    const isCorrectAnswer = targetContainer === correctAnswer;

    // A delayed function runs after 2s, if targetcontainer != start.
    // Sends isCorrectAnswer to the game reducer and runs its "submitAnswer"
    // Here I will add some more feedback features (sound, color, etc) later
    setTimeout(() => {
      dispatch(game.actions.submitAnswer({ isCorrectAnswer }));
      setBoxesDisabled(false);
      setCardPosition(initialCardPosition);

      // Check if the game should end after this question
      if (currentQuestionIndex + 1 === setOfQuestions.length) {
        dispatch(game.actions.endTheGame());
      }
    }, 2000);
  };

  return (
    <DndProvider backend={backend}>
      <Preview>
        <CustomDragLayer />
      </Preview>
      {gameOver ? (
        <Summary score={score} />
      ) : (
        <div className="gameboard">
          <Messageboard
            currentQuestionData={setOfQuestions[currentQuestionIndex]}
            selectedBox={cardPosition.container} />
          <CardContainer onDrop={() => handleDrop('start')}>
            {cardPosition.container === 'start' && (
              <Card
                pickedBox="box_start"
                currentQuestionData={setOfQuestions[currentQuestionIndex]} />
            )}
          </CardContainer>
          <div className="boxes">
            <BoxEn onDrop={() => handleDrop('en')} disabled={boxesDisabled}>
              {cardPosition.container === 'en' && (
                <Card
                  pickedBox="box_en"
                  currentQuestionData={setOfQuestions[currentQuestionIndex]} />
              )}
            </BoxEn>
            <BoxEtt onDrop={() => handleDrop('ett')} disabled={boxesDisabled}>
              {cardPosition.container === 'ett' && (
                <Card
                  pickedBox="box_ett"
                  currentQuestionData={setOfQuestions[currentQuestionIndex]} />
              )}
            </BoxEtt>
          </div>
        </div>
      )}
    </DndProvider>
  );
};
