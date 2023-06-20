import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "001", text: "독서하기", status: "active" },
    { id: "002", text: "글쓰기", status: "active" },
  ]);
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}