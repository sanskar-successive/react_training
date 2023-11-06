// 14.create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.

import { useCallback, useState } from "react";

const TaskList = () => {
  
  const tasks = [
    { name: "task1", status: "to do" },
    { name: "task2", status: "to do" },
    { name: "task3", status: "to do" },
    { name: "task4", status: "to do" },
    { name: "task5", status: "to do" },
  ];
  const [taskList, setTaskList] = useState(tasks);
  const handleCompletedTask = useCallback(
    (taskId) => {
      const updatedTaskList = [...taskList];
      updatedTaskList[taskId] = {
        ...updatedTaskList[taskId],
        status: "completed",
      };
      setTaskList(updatedTaskList);
    },
    [taskList]
  );

  return (
    <>
      <h3>Task List</h3>
      <ul>
        {taskList.map((task, index) => (
          <li>
            <p>{task.name}</p>
            <button onClick={() => handleCompletedTask(index)}>
              {task.status}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
