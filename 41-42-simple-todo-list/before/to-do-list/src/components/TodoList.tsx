import type { Ttodo } from "./Todo";
import Todo from "./Todo";

export default function TodoList({ todos }: { todos: Ttodo[] }) {
  return (
    <ul id="list">
      {todos.map((t) => (
        <Todo todo={t} key={t.id} />
      ))}
    </ul>
  );
}
