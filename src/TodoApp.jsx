
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TodoApp = () => {
  // Predefined set of tasks
  const [tasks, setTasks] = useState([
    { text: 'Build a React project', done: false },
    { text: 'Learn about state and props', done: false },
    { text: 'Practice coding challenges', done: false },
    { text: 'Create a portfolio website', done: false },
    { text: 'Read a tech-related book', done: false },
    { text: 'Improve Java skills', done: false },
    { text: 'Work on React project for Codenation', done: false },
    { text: 'Submit project with the calculator', done: false },
    { text: 'Submit project with the new website', done: false },
    { text: 'Customize personal portfolio', done: false },
    { text: 'Participate in a coding meetup', done: false },
    { text: 'Learn about API integration', done: false },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  const archiveCompletedTasks = () => {
    const filteredTasks = tasks.filter((task) => !task.done);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h1>Junior Developer To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleDone={toggleDone}
        editTask={editTask}
        archiveCompletedTasks={archiveCompletedTasks}
      />
    </div>
  );
};

export default TodoApp;