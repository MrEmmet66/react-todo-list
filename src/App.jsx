import { useSelector } from 'react-redux'
import './App.css'
import TodoItemList from './components/TodoItemList/TodoItemList'
import TodoItem from './components/TodoItem/TodoItem'
import AddTodoItemForm from './components/AddTodoItemForm/AddTodoItemForm'

function App() {
  const sortByDone = (a, b) => {
    
    return (a.isDone === b.isDone) ? 0 : a.isDone ? 1 : -1;
  }

  const todoItems = useSelector((state) => [...state.todos].sort(sortByDone))


  return (
    <div className="app">
      <AddTodoItemForm/>
      <TodoItemList>
        {todoItems.map((todoItem) => {
          return <TodoItem key={todoItem.id} todoItem={todoItem} />
        })}
      </TodoItemList>
    </div>
  )
}

export default App
