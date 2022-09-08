import { useAppSelector } from "../app/hooks";
import { ITodo } from "../inteface/todo.interface";

const todoSelector = (state: {
  todos: { todos: ITodo[]; filterOptions: { show: string } };
}) => {
  if (state.todos.filterOptions.show === "completed") {
    return state.todos.todos.filter((todo: any) => todo.checked === true);
  } else if (state.todos.filterOptions.show === "uncompleted") {
    return state.todos.todos.filter((todo: any) => todo.checked === false);
  }
  return state.todos.todos;
};

const reaminingTodosSelector = (state: { todos: { todos: ITodo[] } }) => {
  return state.todos.todos.filter((todo: any) => todo.checked === false).length;
};

const completedTodosSelector = (state: { todos: { todos: ITodo[] } }) => {
  return state.todos.todos.filter((todo: any) => todo.checked === true).length;
};

export const useTodos = () => useAppSelector(todoSelector);
export const useRemainingTodos = () => useAppSelector(reaminingTodosSelector);
export const useCompletedTodos = () => useAppSelector(completedTodosSelector);
