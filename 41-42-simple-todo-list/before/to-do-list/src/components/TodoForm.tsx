import { useState } from "react";

export default function TodoForm({
  onAddTodo,
}: {
  onAddTodo: (text: string) => void;
}) {
  const [text, setText] = useState("");
  return (
    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        id="todo-input"
      />
      <button onClick={() => onAddTodo(text)}>Add Todo</button>
    </div>
  );
}
