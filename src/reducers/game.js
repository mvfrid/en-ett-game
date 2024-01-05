import { createSlice } from '@reduxjs/toolkit';
import worddata from '../assets/data/worddata.json';
// import worddata from '../assets/data/testwords.json';

const initialState = {
  setOfQuestions: [],
  currentQuestionIndex: 0,
  gameOver: false,
  gameStart: false,
  score: 0
};

const getRandomWords = (source, count) => {
  const worddataCopy = [...source.words];
  const filteredWords = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < count && i < worddataCopy.length; i++) {
    const randomIndex = Math.floor(Math.random() * worddataCopy.length);
    const selectedWord = worddataCopy.splice(randomIndex, 1)[0]; // Remove the selected word
    filteredWords.push(selectedWord);
  }

  return filteredWords;
};

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      const { isCorrectAnswer } = action.payload;

      if (isCorrectAnswer) {
        state.score += 1;
      } else {
        state.score -= 0;
      }

      // Update currentQuestionIndex
      if (state.currentQuestionIndex + 1 === state.setOfQuestions.length) {
        state.gameOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },
    startTheGame: (state) => {
      return {
        ...state,
        gameStart: true,
        setOfQuestions: getRandomWords(worddata, 7)
      };
    },
    endTheGame: () => {
      // state.gameOver = true;
      console.log('Nu har endTheGame gått iväg');
      // Här måste vi spara och visa resultaten
      return initialState;
    }
  }
});