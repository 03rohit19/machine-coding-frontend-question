import React, { useEffect, useState } from "react";

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-16 h-16 border-2 border-gray-400 text-2xl font-bold flex items-center justify-center"
    >
      {value}
    </button>
  );
}

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill("")); // Use empty strings instead of spaces
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  const [gameOver, setGameOver] = useState(false);

  // Function to check if there's a winner
  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] !== "" && // Check if the square is not empty
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x]; // Return the winner ("X" or "O")
      }
    }
    return null;
  }

  useEffect(() => {
    const winner = getWinner(squares); // Calculate winner once

    if (winner) {
      setStatus(`Winner is ${winner}`);
      setGameOver(true); // Mark the game as over
    } else if (squares.every((square) => square !== "")) {
      setStatus("This is a draw, please restart the game.");
      setGameOver(true); // Game ends in a draw
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
      setGameOver(false); // Continue the game if no winner or draw
    }
  }, [squares, isXTurn]);

  function handleClick(index) {
    // Prevent clicking if game is over or square is already filled
    if (squares[index] !== "" || gameOver) return;

    const newSquares = [...squares];
    newSquares[index] = isXTurn ? "X" : "O";
    setSquares(newSquares); // Update the squares array
    setIsXTurn(!isXTurn); // Toggle the turn
  }

  // Restart the game by resetting the state
  function restartGame() {
    setSquares(Array(9).fill("")); // Reset to initial state with empty strings
    setIsXTurn(true); // Set X as the first player again
    setStatus(""); // Clear the status message
    setGameOver(false); // Reset game over state
  }

  // Render the 9 squares dynamically
  function renderSquares() {
    return squares.map((value, index) => (
      <Square key={index} value={value} onClick={() => handleClick(index)} />
    ));
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-[100px]">
      <div className="flex gap-4">{renderSquares().slice(0, 3)}</div>
      <div className="flex gap-4">{renderSquares().slice(3, 6)}</div>
      <div className="flex gap-4">{renderSquares().slice(6, 9)}</div>
      <h1>{status}</h1>
      {/* Conditionally render the restart button when the game is over */}
      {gameOver && (
        <button
          onClick={restartGame}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded"
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
