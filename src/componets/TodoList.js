import React, { useState } from 'react';
import TodoForm from './TodoForm';

export default function TodoList() {
  // State Array which holds all TODOS
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    if (!task.text) {
      return;
    }
    const newTodos = [task, ...todos];
    setTodos(newTodos);
  };

  // Remove todo from list
  const removeTask = (id) => {
    let updatedTasks = [...todos].filter((task) => task.id !== id);
    setTodos(updatedTasks);
  };

  return (
    <div>
      <TodoForm addTask={addTask}></TodoForm>
      {/* Render your todo items here */}
      <ul>
        {todos.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
