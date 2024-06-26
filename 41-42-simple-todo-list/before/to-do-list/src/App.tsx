import { useState } from "react";
import "./App.css";
import { Ttodo } from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Ttodo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Ttodo = { id: crypto.randomUUID(), text };
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  };

  return (
    <>
      <TodoList todos={todos} />
      <TodoForm onAddTodo={addTodo} />
    </>
  );
}

export default App;
