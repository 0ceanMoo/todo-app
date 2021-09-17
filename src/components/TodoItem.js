const TodoItem = ({todo, toggleTodoListItemStatus, deleteTodoListItem}) => {
  return (
    <li>
      {todo.content}
      <button onClick={()=>toggleTodoListItemStatus(todo.id)}>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
      <button onClick={()=>deleteTodoListItem(todo.id)}>削除</button>
    </li>
  )
}
export default TodoItem;
