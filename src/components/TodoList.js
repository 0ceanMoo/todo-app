import { List } from "@chakra-ui/react"
import TodoTitle from "./TodoTitle"
import TodoItem from "./TodoItem"

const TodoList = ({
    title,
    as,
    fontSize,
    todoList,
    toggleTodoListItemStatus,
    deleteTodoListItem
  }) => {
  return (
    <>
      <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
      <List w="full">
        {todoList.map(todo=><TodoItem key={todo.id} todo={todo}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          />)}
      </List>
    </>
  )
}
export default TodoList;
