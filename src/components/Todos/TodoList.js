import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  if (!todos.length) {
    return (
      <div className={styles.todoListEmpty}>
        <h2>Todo list is empty</h2>
      </div>
    )
  }

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
