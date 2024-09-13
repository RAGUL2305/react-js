import React, { useState } from "react";
import "./tictactoe.css";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
     const winner = calculateWinner(newBoard);
     setWinner(winner);
  };

  const calculateWinner = (board) => {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const renderButton = (index) => {
    return (
      <button className="button" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div>
        <div>
          {renderButton(0)}
          {renderButton(1)}
          {renderButton(2)}
        </div>
        <div>
          {renderButton(3)}
          {renderButton(4)}
          {renderButton(5)}
        </div>
        <div>
          {renderButton(6)}
          {renderButton(7)}
          {renderButton(8)}
        </div>
      </div>
      {winner && (
        <div>
          <h2>Winner: {winner}</h2>
          <button className="reset-button" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
