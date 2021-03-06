import { createSelector } from 'reselect';

import guessedLettersSelector from './guessedLetters';
const currentWordSelector = state => state.currentWord;

export default createSelector(
  [guessedLettersSelector, currentWordSelector],
  (guessedLetters, currentWord) => guessedLetters.reduce(
    (numWrongGuesses, letter) => currentWord.includes(letter)
      ? numWrongGuesses
      : numWrongGuesses + 1,
    0
  )
);
