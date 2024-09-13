import React, { useState } from "react";
import "./tictactoe.css";
import _ from "lodash";

export default function Game() {
  const [option, setOption] = useState(Array(9).fill(null));
  const [value, setValue] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (option[index] || winner) {
      return;
    }
    const newBoard = option;
    newBoard[index] = value ? "X" : "O";
    setOption(newBoard);
    setValue(!value);
    const selecetdWinner = finalWinner(newBoard);
    setWinner(selecetdWinner);
  };

  const finalWinner = (option) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (option[a] && option[a] === option[b] && option[a] === option[c]) {
        return option[a];
      }
    }
  };

  const resetGame = () => {
    setOption(Array(9).fill(null));
    setValue(true);
    setWinner(null);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="inputbutton">
        {option.map((item, index) => (
          <button className="game-button" onClick={() => handleClick(index)}>
            {option[index]}
          </button>
        ))}
      </div>
      <div>
        <h2>
          {winner
            ? `Winner: ${winner}`
            : _.without(option, null).length === 9
            ? "MATCH IS DRAW"
            : null}
        </h2>
      </div>
      <div>
        <button className="resetbutton" onClick={resetGame}>
          Reset
        </button>
      </div>
    </div>
  );
}
