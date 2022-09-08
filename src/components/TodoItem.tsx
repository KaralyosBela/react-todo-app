import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { deleteTodo, checkTodo } from "../features/todosSlice";
import { ITodo } from "../inteface/todo.interface";
import classes from "../components/TodoItem.module.css";

interface Props {
  todo: ITodo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();

  const delTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const chTodo = (id: number) => {
    dispatch(checkTodo(id));
  };

  return (
    <div className={classes.todoItem}>
      <div className={classes.todoLeftSie} onClick={() => chTodo(todo.id)}>
        <input
          onChange={() => chTodo(todo.id)}
          type="checkbox"
          checked={todo.checked}
        ></input>
        {todo.title}
      </div>
      <div className={classes.todoRightSide}>
        {todo.priority === "LOW" && <div className={classes.priority + " " + classes.low}>{todo.priority}</div>}
        {todo.priority === "NORMAL" && <div className={classes.priority + " " + classes.normal}>{todo.priority}</div>}
        {todo.priority === "HIGH" && <div className={classes.priority + " " + classes.high}>{todo.priority}</div>}
        <button className={classes.deletTodoBtn} onClick={() => delTodo(todo.id)}>DELETE</button>
      </div>
    </div>
  );
};
