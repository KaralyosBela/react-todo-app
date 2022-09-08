import { useCompletedTodos, useRemainingTodos } from "../features/todo.hook";
import classes from "../components/TodoCounter.module.css";

export const TodoCounter: React.FC = () => {
  const remainingTodos = useRemainingTodos();
  const completedTodos = useCompletedTodos();

  return <div className={classes.todoCounter}>
    <div className={classes.remaining}>Remaining: {remainingTodos}</div>
    <div className={classes.completed}>Completed: {completedTodos}</div>
  </div>;
};
