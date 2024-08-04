import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <form className={styles.todoForm}>
      <input
        value={text}
        placeholder="Enter new todo"
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={onSubmitHandler} title="Submit">
        Submit
      </Button>
      {/* <button type="submit">Submit</button> */}
    </form>
  )
}

export default TodoForm
