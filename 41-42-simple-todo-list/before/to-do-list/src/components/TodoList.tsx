import type { Ttodo } from "./Todo";
import Todo from "./Todo";

export default function TodoList({ todos, onRemoveTodo }: { todos: Ttodo[], onRemoveTodo: (todoid:string)=>void }) {
  return (
    <ul id="list">
      {todos.map((t) => (
        <Todo todo={t} key={t.id}  onRemoveTodo={onRemoveTodo}/>
      ))}
    </ul>
  );
}
