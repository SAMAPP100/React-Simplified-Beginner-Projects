import { FormEvent, useState } from "react";

export default function TodoForm({
  onAddTodo,
}: {
  onAddTodo: (text: string) => void;
}) {
  const [text, setText] = useState("");

const submit = (e: FormEvent)=>{
  e.preventDefault()
  onAddTodo(text)
  return setText('');
}

  return (
    <form onSubmit={submit} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        id="todo-input"
      />
      <button >Add Todo</button>
    </form>
  );
}
