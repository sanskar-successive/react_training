const Tasklist = ({ tasks }) => {
  const taskList = tasks.map((task) => {
    return <li key={task.id}>{task.name}</li>;
  });
  return (
    <>
      <ul>{taskList}</ul>
    </>
  );
};
export default Tasklist;
