import React, { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from './Card.js';
import { BoxEn } from './BoxEn.js';
import { BoxEtt } from './BoxEtt.js';
// import { CustomDragLayer } from './CustomDragLayer.js';
import { CardContainer } from './CardContainer.js';
import { Messageboard } from './Messageboard.js';
import { Summary } from './Summary.js';
import { game } from '../reducers/game';

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

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  // Determine the appropriate backend based on the device
  const backend = isTouchDevice() ? TouchBackend : HTML5Backend;

  const handleDrop = (targetContainer) => {
    setCardPosition({ container: targetContainer });
    setBoxesDisabled(true); // Disable the boxes

    const correctAnswer = setOfQuestions[currentQuestionIndex].answer;
    // Check if the dropped card's container matches the correct answer
    const isCorrectAnswer = targetContainer === correctAnswer;

    setTimeout(() => {
      dispatch(game.actions.submitAnswer({ isCorrectAnswer }));
      setBoxesDisabled(false);
      setCardPosition(initialCardPosition);
    }, 2000); // 2000 milliseconds (2 seconds)
  };

  return (
    <DndProvider backend={backend}>
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
