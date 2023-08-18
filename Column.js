import React from 'react';
import Task from './Task';

function Column({ title, tasks }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
