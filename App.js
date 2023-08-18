import React, { useState } from 'react';
import './App.css';
import Board from './Board';

function App() {
  const [boardData, setBoardData] = useState({
    todo: [
      { id: 1, title: 'Create on-boarding tutorial', content: 'urgent' },
      
    ],
    inProgress: [
      { id: 2, title: 'Implement multi-language support', content: 'no priority' },
    ],
    done: [
      
    ],
  });

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <Board boardData={boardData} />
    </div>
  );
}

export default App;
