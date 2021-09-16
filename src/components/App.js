import React, { useState, useEffect } from "react"
import axios from "axios"

//"https://jsonplaceholder.typicode.com/users"

const todoDataUrl = "http://localhost:3100/todos"

const TodoList = ({title, list}) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {list.map((todo)=>(
          <li key={todo.id}>{todo.content}（{todo.done ? "完了" : "未完了"}）</li>
        ))}
      </ul>
    </>
  )
}


function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl)
      setTodoList(response.data)
    };
    fetchData();
  }, [])

  console.log("TODOリスト", todoList)

  const inCompletedList = todoList.filter(todo=>{return !todo.done})
  const completedList   = todoList.filter(todo=>{return  todo.done})

  return (
    <>
      <h1>TODO進捗管理</h1>
      <textarea />
      <button>+ TODOを追加</button>

      <TodoList title="未完了TODOリスト"  list={inCompletedList} />
      <TodoList title="完了TODOリスト"    list={completedList} />

    </>
  );
}

export default App;
