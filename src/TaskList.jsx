// TaskList.jsx
import React from 'react';

const TaskList = ({ tasks, toggleDone, editTask, archiveCompletedTasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(index)}
            />
            <span
              style={{ textDecoration: task.done ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
            <button onClick={() => editTask(index, prompt('Edit task:', task.text))}>
              Edit
            </button>
          </li>
        ))}
      </ul>
      <button onClick={archiveCompletedTasks}>Archive Completed</button>
    </div>
  );
};

export default TaskList;