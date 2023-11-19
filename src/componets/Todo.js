import React from "react";

export default function Todo({ Todos, completeTask, removeTask }) {
  return (
    <div>
      {Todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <div className={`todo-text ${todo.isComplete ? "completed" : ""}`}>
            {todo.text}
          </div>
          <div className="icons">
            <button onClick={() => completeTask(todo.id)}>Complete</button>
            <button onClick={() => removeTask(todo.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
