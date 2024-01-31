

const CompletedTasks = ({ completedTasks }) => {
  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
css
