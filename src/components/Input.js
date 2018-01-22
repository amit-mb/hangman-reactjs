import React from 'react';

const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const Input = ({ lettersStatus, onClick }) =>
  <div className="row">
    {letters.map(letter => (
      <button
        type="button"
        className="btn btn-default"
        onClick={() => onClick(letter)}
      >{letter}</button>
    ))}
    lettersStatus: {JSON.stringify(lettersStatus)}
  </div>;

export default Input;
