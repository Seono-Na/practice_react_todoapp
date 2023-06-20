import React, { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText("");
      return;
    }
    onAdd({ id: "111", text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add To Do"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}