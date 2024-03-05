import React, { useState } from "react";

export default function Form({ addTodos }) {
  const [message, setMessage] = useState("Create a new todo...");
  const [value, setValue] = useState("");

  function clearInput(e) {
    e.target.value === "";
  }

  function changeInput(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() !== "") {
      addTodos(e, value);
    }
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="AddForm">
      <input
        type="text"
        name="todo"
        id="todo"
        value={value}
        placeholder={message}
        onFocus={clearInput}
        onChange={changeInput}
      />
      <button>Add +</button>
    </form>
  );
}
