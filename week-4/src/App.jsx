/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

// Square component
function Square({ value, onSquareClick }) {
  return <td onClick={onSquareClick}>{value}</td>;
}

// Board container
function Board({ winner, handleClick, resetBoard, arr }) {
  return (
    <>
      {winner && <h3>The winner is : {winner}</h3>}
      <table border="1">
        <tr>
          <Square value={arr[0][0]} onSquareClick={() => handleClick(0, 0)} />
          <Square value={arr[0][1]} onSquareClick={() => handleClick(0, 1)} />
          <Square value={arr[0][2]} onSquareClick={() => handleClick(0, 2)} />
        </tr>
        <tr>
          <Square value={arr[1][0]} onSquareClick={() => handleClick(1, 0)} />
          <Square value={arr[1][1]} onSquareClick={() => handleClick(1, 1)} />
          <Square value={arr[1][2]} onSquareClick={() => handleClick(1, 2)} />
        </tr>
        <tr>
          <Square value={arr[2][0]} onSquareClick={() => handleClick(2, 0)} />
          <Square value={arr[2][1]} onSquareClick={() => handleClick(2, 1)} />
          <Square value={arr[2][2]} onSquareClick={() => handleClick(2, 2)} />
        </tr>
      </table>
      <button onClick={resetBoard}>Start Again</button>
    </>
  );
}
function Game() {
  let [winner, setWinner] = useState(null);
  let [val, setVal] = useState("X");
  let [history, setHistory] = useState([]);
  let [arr, setArr] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  function handleClick(i, j) {
    // stopping to overwrite
    if (arr[i][j]) return;

    // placing the value
    const newArr = [...arr];
    newArr[i][j] = val;
    setArr(newArr);
    setHistory([...history, { option: arr[i][j], posX: i, posY: j }]);
    // handle logic
    let result = solve(i, j);
    if (result == "X" || result == "O") {
      setWinner(result);
    }

    // changing value for next player
    setVal(val == "X" ? "O" : "X");
  }
  function solve(i, j) {
    // row
    if (
      arr[i][0] != null &&
      arr[i][1] != null &&
      arr[i][2] != null &&
      arr[i][0] == arr[i][1] &&
      arr[i][1] == arr[i][2]
    ) {
      return arr[i][j];
    }
    //col
    if (
      arr[0][j] != null &&
      arr[1][j] != null &&
      arr[2][j] != null &&
      arr[0][j] == arr[1][j] &&
      arr[1][j] == arr[2][j]
    ) {
      return arr[i][j];
    }
    //left diagonal
    if (
      arr[0][0] != null &&
      arr[1][1] != null &&
      arr[2][2] != null &&
      arr[0][0] == arr[1][1] &&
      arr[1][1] == arr[2][2]
    ) {
      return arr[i][j];
    }
    //right diagonal
    if (
      arr[0][2] != null &&
      arr[1][1] != null &&
      arr[2][0] != null &&
      arr[0][2] == arr[1][1] &&
      arr[1][1] == arr[2][0]
    ) {
      return arr[i][j];
    }
  }
  function resetBoard() {
    setArr([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setVal("X");
    setWinner(null);
    setHistory([]);
  }
  let moves = history.map((square, idx) => {
    return (
      <li key={idx}>
        {square.option} at {square.posX}
        {square.posY}
      </li>
    );
  });
  return (
    <>
      <div className="gameBoard">
        <Board
          resetBoard={resetBoard}
          winner={winner}
          handleClick={handleClick}
          arr={arr}
        />
      </div>
      <ol className="gameHistory">{moves}</ol>
    </>
  );
}
export default Game;
