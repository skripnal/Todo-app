import { RiTodoLine } from 'react-icons/ri'
import { MdDeleteOutline } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'

import styles from './Todo.module.css'

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`${styles.todoContainer} ${
        todo.isComplited ? styles.complited : ''
      }`}
    >
      <div className={styles.text}>
        <RiTodoLine className={styles.icon} />
        <p>{todo.text}</p>
      </div>
      <div className={styles.actions}>
        <MdDeleteOutline
          className={styles.deleteButton}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheck
          className={styles.checkButton}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>
    </div>
  )
}

export default Todo
