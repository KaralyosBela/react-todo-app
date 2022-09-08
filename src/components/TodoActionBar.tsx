import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { addTodo } from "../features/todosSlice";
import classes from "../components/TodoActionBar.module.css";
import { TodoPriorityBar } from "./TodoPriorityBar";

export const TodoActionBar: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [priority, setPriority] = useState<string>("LOW");
  const dispatch = useDispatch<AppDispatch>();

  const onChangeTodo = (event: any) => {
    setTodo(event.currentTarget.value);
  };

  const onKeyDown = (event: any) => {
    if(event.charCode === 13) {
      add();
    }
  };
  
  const add = () => {
    if (todo !== "") {
      dispatch(
        addTodo({
          id: Math.random() * 100,
          title: todo,
          checked: false,
          priority: priority
        })
      );
      setTodo("");
    }
  };

  return (
    <div className={classes.actionBarComponent}>
      <TodoPriorityBar setPrior={setPriority}/>
      <div className={classes.actionBar}>
        <input onChange={onChangeTodo} value={todo} onKeyPress={onKeyDown}></input>
        <button onClick={add}>Add Todo</button>
      </div>
    </div>
  );
};
