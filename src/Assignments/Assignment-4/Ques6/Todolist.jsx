// 6.Build a simple todo list component with a text input for adding new tasks and a list to display them.
// Use controlled components to handle the input and update the list of tasks.

import { useMemo } from "react";
import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const handleAddTask = () => {
    if (task.length > 0) setTasklist([...tasklist, task]);
    setTask("");
  };
  const memoisedTaskList = useMemo(() => {
    return tasklist;
  }, [tasklist]);

  return (
    <>
      <h3>Todolist</h3>
      <input
        placeholder="Enter task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {memoisedTaskList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
