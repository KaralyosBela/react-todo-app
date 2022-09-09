import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { removeCompletedTodos, setFilterOptions } from "../features/todosSlice";
import classes from "../components/TodoFilterBar.module.scss";
import { useState } from "react";
import { useCompletedTodos, useRemainingTodos } from "../features/todo.hook";

export const TodoFilterBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [active, setActive] = useState<number>(1);
  const remainingTodos = useRemainingTodos();
  const completedTodos = useCompletedTodos();

  const setTodoFilter = (filterBy: string, activeButton: number) => {
    dispatch(setFilterOptions(filterBy));
    setActive(activeButton);
  };

  const removeTodos = () => {
    dispatch(removeCompletedTodos());
  };

  return (
    <div className={classes.filterBar}>
      <button
        data-testid="showAll"
        className={active === 1 ? classes.active : " " + classes.showAllBtn}
        onClick={() => setTodoFilter("both", 1)}
      >
        Show all
      </button>
      <button
        data-testid="completedBtn"
        className={active === 2 ? classes.active : " " + classes.completedBtn}
        onClick={() => setTodoFilter("completed", 2)}
      >
        Show completed<span>{completedTodos}</span>
      </button>
      <button
        data-testid="uncompletedBtn"
        className={active === 3 ? classes.active : " " + classes.uncompletedBtn}
        onClick={() => setTodoFilter("uncompleted", 3)}
      >
        Show remaining<span>{remainingTodos}</span>
      </button>
      <button className={classes.removeBtn} onClick={removeTodos}>
        Remove completed
      </button>
    </div>
  );
};
