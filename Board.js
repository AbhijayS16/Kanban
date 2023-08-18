import React from 'react';
import Column from './Column';

function Board({ boardData }) {
  return (
    <div className="board">
      {Object.keys(boardData).map((columnKey) => (
        <Column key={columnKey} title={columnKey} tasks={boardData[columnKey]} />
      ))}
    </div>
  );
}

export default Board;
