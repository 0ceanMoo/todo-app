import React, {useRef} from "react"
import { useTodo } from "../hooks/useTodo"
import TodoTitle from "./TodoTitle"
import TodoAdd from "./TodoAdd"
import TodoList from "./TodoList"

import { Container } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

function App() {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem
  } = useTodo();

  // TODOの追加関連
  const inputEl = useRef(null)
  const handleAddTodoListItem = () => {
    if ( inputEl.current.value === "" ) return;
    addTodoListItem(inputEl.current.value)
    inputEl.current.value = ""
  }

  // 完了と未完了のTODOに分ける
  console.log("TODOリスト", todoList)
  const inCompletedList = todoList.filter(todo=>{return !todo.done})
  const completedList   = todoList.filter(todo=>{return  todo.done})

  return (
    <Container centerContent p={{base: "4", md: "6"}} maxWidth="3xl">
      <TodoTitle title="TODO進捗管理" as="h1" />
      <TodoAdd
        placeholder="ADD TODO"
        leftIcon={<AddIcon />}
        buttonText="TODOを追加"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />
      <TodoList
        as="h2"
        title="未完了TODOリスト"
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        fontSize={{base: "xl", md: "2xl"}}
      />
      <TodoList
        as="h2"
        title="完了TODOリスト"
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        fontSize={{base: "xl", md: "2xl"}}
      />
    </Container>
  );
}

export default App;
