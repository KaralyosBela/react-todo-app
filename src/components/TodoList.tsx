import { ITodo } from "../inteface/todo.interface";
import { TodoItem } from "./TodoItem";
import classes from "../components/TodoList.module.css";
import { useAppSelector } from "../app/hooks";

interface Props {
  todos: ITodo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  const filterOption = useAppSelector(state => state.todos.filterOptions.show);

  return (
    <div className={classes.todoList}>
      {todos.length < 1 && filterOption === "both" && <div className={classes.error}>No todos to show.</div>}
      {todos.length < 1 && filterOption === "completed" && <div className={classes.error}>No completed todos yet.</div>}
      {todos.length < 1 && filterOption === "uncompleted" && <div className={classes.error}>No remaining todos.</div>}
      {todos.length > 0 && todos.map((todo, id) => (
        <TodoItem todo={todo} key={id}/>
      ))}
    </div>
  );
};
