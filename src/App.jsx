import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  /*useState accepts an initial state and returns two values: The current state + A function that updates the state.*/

  const [todoValue, setTodoValue] = useState('') //The current input value and the value after any change in the input
  const [todoTime, setTodoTime] = useState('')

  function persistData(newList) {
  /*To save data to localStorage*/
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
    /*The setItem() method of the Storage interface, when passed a key name and value,
    will add that key to the given Storage object, or update that key's value if it already exists.*/
  }
    
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    /*The useState function to update the old state takes an argument which is the new state*/
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      /*Return all to todo items that is not equal to the deleting item*/
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index].content
    const timeToBeEdited = todos[index].time
    setTodoValue(valueToBeEdited)   //Set the input content to be the current editing item
    setTodoTime(timeToBeEdited)
    handleDeleteTodo(index)
  }
  
  useEffect(() => { //Read todos
  /* useEffefct hook allows you to perform side effects in your components.
  Some examples of side effects: fetching data, directly updating the DOM, and timers. */
    if (!localStorage) return
    let localTodos = localStorage.getItem('todos')

    if (!localTodos) return
    localTodos = (JSON.parse(localTodos)).todos
    setTodos(localTodos)
  }, [])  //Set dependenccy as an empty array to make the side effect run only once on page load

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} todoTime={todoTime} setTodoTime={setTodoTime} handleAddTodos={ handleAddTodos }/>
      <TodoList todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
