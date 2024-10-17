import { useState } from "react"

export default function TodoInput(props) {
    const { todoValue, setTodoValue, todoTime, setTodoTime, handleAddTodos } = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..."/>
            <input type="date" min="24-10-18" onChange={(e) => {
                setTodoTime(e.target.value)
            }}/>
            <button onClick={() => {
                handleAddTodos({ content: todoValue, time: todoTime})
                setTodoValue('')
                setTodoTime('')
            }}>Add</button>
        </header>
    )
}