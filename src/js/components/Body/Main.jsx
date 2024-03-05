import React, { useState } from "react";
import Form from "../Form/Form.jsx";
import TodoList from "../TodoList/TodoList.jsx";

export default function Main() {
  const [todos, setTodos] = useState([]);
  const addTodos = (e, value) => {
    e.preventDefault();
    setTodos([...todos, value]);
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="content">
      <Form addTodos={addTodos} />
      <div className="list">
        <ul>
          {todos.map((value, index) => (
            <TodoList
              key={index}
              value={value}
              removeTodo={removeTodo}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
