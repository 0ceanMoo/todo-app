import TodoItem from "./TodoItem"

const TodoList = ({title, list, toggleTodoListItemStatus, deleteTodoListItem}) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {list.map(todo=><TodoItem key={todo.id} todo={todo}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          />)}
      </ul>
    </>
  )
}
export default TodoList;
