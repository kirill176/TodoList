import React from "react";

export default function TodoList({ value, removeTodo, index }) {
  return (
    <li>
      <p>{value}</p>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
}
