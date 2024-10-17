import React from 'react'
import TodoCard from "./TodoCard"

export default function TodoList(props) {
  const {todos, handleDeleteTodo} = props   //Destructuring out the props

  return (
    <ul  className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <div>
              <h3>{todo.content}</h3>
              <p><i>{todo.time}</i></p>
            </div>
          </TodoCard>
        )
      })}
    </ul>
  )
}
