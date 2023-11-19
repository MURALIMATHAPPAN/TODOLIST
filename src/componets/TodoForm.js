import React, { useState } from "react";

export default function TodoForm(props) {
  // State
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      return; // Don't add empty todos
    }

    const newTask = {
      id: Math.floor(Math.random() * 100000),
      text: input,
      isComplete: false,
    };

    props.addTask(newTask);
    setInput(""); // Clear input after adding task
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name="text"
      />
      <button type="submit" onClick={handleSubmit} className="todo-btn">
        ADD TODO
      </button>
    </form>
  );
}
