// 3.Create a functional component called ToDoList.
// Use the useState hook to manage a state variable named todos, initialized as an empty array.
// Render a list of todos using the map function.
// Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
// Use the useState hook to manage the state of each todo item (completed or not).

import { useState } from "react";

const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState({
    desc: "",
    completed: false,
    deleted: false,
  });
  const handleTask = (e) => {
    setTask({ desc: e.target.value, completed: false, deleted: false });
  };
  const handleAddTask = () => {
    if (task.desc.length > 0) setTodos((current) => [...current, task]);
    setTask({ desc: "", completed: false, deleted: false });
  };
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((element) => element !== todos[index]);
    setTodos(updatedTodos);
  };
  const handleTaskCompleted = (event, index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = {
      ...updatedTodos[index],
      completed: event.target.checked,
    };
    console.log(updatedTodos[index]);
    setTask({ ...task, completed: event.target.checked });
    setTodos(updatedTodos);
  };
  return (
    <>
      <h4>Todo List</h4>
      <input
        value={task.desc}
        onChange={handleTask}
        placeholder="Enter task"
        type="text"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {todos.map((task, index) => (
          <li>
            <div>
              <p>{task.desc}</p>
              <input
                checked={task.completed}
                onChange={(event) => handleTaskCompleted(event, index)}
                type="checkbox"
              />
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
