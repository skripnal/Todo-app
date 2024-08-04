import Button from '../UI/Button'
import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri'
import styles from './TodosActions.module.css'

const TodosActions = ({
  resetTodos,
  deleteComplitedTodos,
  complitedTodosExist,
}) => {
  return (
    <div className={styles.todoActions}>
      <Button onClick={resetTodos} title="Reset">
        <RiRefreshLine />
      </Button>

      <Button
        disabled={!complitedTodosExist}
        onClick={deleteComplitedTodos}
        title="Delete complited"
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
