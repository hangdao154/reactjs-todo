import { useState, useEffect } from "react"

export default function TodoInput(props) {
    const { todoValue, setTodoValue, todoTime, setTodoTime, handleAddTodos } = props
    const today = new Date()
    const todayString = (
        (today.getMonth() + 1 < 10) ? 
        `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`: 
        `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    )
    
    useEffect(() => {
        setTodoTime(todayString)
    }, [])

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..."/>
            <input type="date" value={todoTime} min="24-10-18" onChange={(e) => {
                setTodoTime(e.target.value)
            }}/>
            <button onClick={() => {
                handleAddTodos({ content: todoValue, time: todoTime })
                setTodoValue('')
                setTodoTime(todayString)
            }}>Add</button>
        </header>
    )
}