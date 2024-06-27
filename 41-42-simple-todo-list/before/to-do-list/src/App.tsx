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

  const removeTodo = (todoid:string)=>{
    setTodos(currentTodos => currentTodos.filter(t => t.id !== todoid))
  }

  return (
    <>
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
      <TodoForm onAddTodo={addTodo} />
    </>
  );
}

export default App;
