import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import styles from './TodoApp.module.css'
import TodosActions from './TodosActions'

const TodoApp = () => {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo }
      })
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteComplitedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComplited))
  }

  const complitedTodosCount = todos.filter((todo) => todo.isComplited).length

  return (
    <div className={styles.todoAppContainer}>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          complitedTodosExist={!!complitedTodosCount}
          resetTodos={resetTodosHandler}
          deleteComplitedTodos={deleteComplitedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {complitedTodosCount > 0 && (
        <h2
          className={styles.complitedTodosInfo}
        >{`You have complited ${complitedTodosCount} ${
          complitedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  )
}

export default TodoApp
