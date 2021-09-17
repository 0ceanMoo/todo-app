import React, {useRef} from "react"
import { useTodo } from "../hooks/useTodo"
import TodoAdd from "./TodoAdd"
import TodoList from "./TodoList"

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
    <>
      <h1>TODO進捗管理</h1>
      <TodoAdd inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
      <TodoList title="未完了TODOリスト"  list={inCompletedList}  toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
      <TodoList title="完了TODOリスト"    list={completedList}    toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
    </>
  );
}

export default App;
