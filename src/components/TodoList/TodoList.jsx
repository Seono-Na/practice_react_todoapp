import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: "독서하기", status: "active" },
    { id: uuidv4(), text: "글쓰기", status: "active" },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((item) => item.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);
  return (
    <section>
      <ul>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((item) => item.status === filter);
}
