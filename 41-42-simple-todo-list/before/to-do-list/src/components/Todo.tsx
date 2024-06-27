
export type Ttodo = {
    id:string,
    text: string
}

export default function Todo({todo, onRemoveTodo}:{todo:Ttodo, onRemoveTodo: (todoid:string)=>void}){
return(
    <li className="list-item">
        <label className="list-item-label">
          <input type="checkbox" data-list-item-checkbox />
          <span data-list-item-text>{todo.text}</span>
        </label>
        <button data-button-delete onClick={()=> onRemoveTodo(todo.id)}>Delete</button>
      </li>
)
}