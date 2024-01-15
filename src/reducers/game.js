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

// Here we randomly select 10 words from our dataset (will be moved to API endpoint later)
const getRandomWords = (source, count) => {
  // Creates a copy of the dataset
  const worddataCopy = [...source.words];
  // Prepare an empty array for all the 10 selected words in this game
  const filteredWords = [];

  // Loops through 10 (count) times
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < count && i < worddataCopy.length; i++) {
    // Generates a random number between 0 and the total amount of words in dataset
    const randomIndex = Math.floor(Math.random() * worddataCopy.length);
    // Remove the selected word from the copy of the dataset
    // This way, we won't get duplicates in this round
    const selectedWord = worddataCopy.splice(randomIndex, 1)[0];
    // Push the selected word to the filteredWords array
    filteredWords.push(selectedWord);
  }

  console.log('filteredWords inside getRandomWords function', filteredWords)
  // Returns an array with 10 randomly selected words and their data
  return filteredWords;
};

// A slice is a collection of Redux reducer logic and actions for a single feature in your app.
export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // When the user submits an answer to a question, this reducer function runs.
    // The payload is currently just 'isCorrectAnswer' from Gameboard component
    submitAnswer: (state, action) => {
      // We retrieve the payload and store it in 'isCorrectAnswer'
      const { isCorrectAnswer } = action.payload;

      // Handles adding points to the score
      if (isCorrectAnswer) {
        state.score += 1;
      }

      // Handles incrementing the current question index
      if (state.currentQuestionIndex === state.setOfQuestions.length) {
        state.currentQuestionIndex += 0;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    // Starts the game, by setting gameStart to true and running the getRandomWords function
    // Updating the state with these randomly selected words
    startTheGame: () => {
      // Reset the state to initial state
      const newState = { ...initialState };

      // Set gameStart to true and update setOfQuestions
      newState.gameStart = true;
      newState.setOfQuestions = getRandomWords(worddata, 10);

      return newState;
    },
    // Sets gameOver to true, which ends the game (renders Summary component)
    // No re-setting of the state is done here
    endTheGame: (state) => {
      console.log('Nu har endTheGame gått iväg');
      state.gameOver = true;
      // Here we need to save and visualize the results
    }
  }
});
