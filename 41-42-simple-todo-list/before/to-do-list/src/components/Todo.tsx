
export type Ttodo = {
    id:string,
    text: string
}

export default function Todo({todo}:{todo:Ttodo}){
return(
    <li className="list-item">
        <label className="list-item-label">
          <input type="checkbox" data-list-item-checkbox />
          <span data-list-item-text>{todo.text}</span>
        </label>
        <button data-button-delete>Delete</button>
      </li>
)
}