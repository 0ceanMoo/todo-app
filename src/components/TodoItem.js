import { ListItem, Text, Flex, Button, IconButton } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"

const TodoItem = ({
    todo,
    toggleTodoListItemStatus,
    deleteTodoListItem
  }) => {

  const handleToggleTodoListItemStatus = ()=>toggleTodoListItemStatus(todo.id)
  const handleAddTodoListItem = () => deleteTodoListItem(todo.id)

  const label = todo.done ? "未完了リストへ" : "完了リストへ"
  const setColorSheme = todo.done ? "pink" : "blue"

    /* <ListItem borderWidth="1px" p="4" mt="4" > */
  return (
    <ListItem borderwWidth="1px" p="4" mt="4" bg="white" borderRedius="md" borderColor="gray.300">
      <Text mb="6">{todo.content}</Text>

      <Flex align="center" justify="flex-end">
        <Button
          colorScheme={setColorSheme}
          variant="outline"
          size="sm"
          onClick={handleToggleTodoListItemStatus}>
          {label}
        </Button>

        <IconButton 
          icon={<DeleteIcon />}
          variant="unstyled"
          aria-label="delete"
        onClick={handleAddTodoListItem}
        />
      </Flex>
    </ListItem>
  )
}
export default TodoItem;
