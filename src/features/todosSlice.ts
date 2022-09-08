import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../inteface/todo.interface";

interface todoState {
  todos: ITodo[];
  numberOfTodos: number;
  filterOptions: {
    show: string
  };
}

const initialState: todoState = {
  todos: [
    {
      id: 1,
      checked: true,
      title: "Take out the trash",
      priority: "LOW"
    },
    {
      id: 2,
      checked: false,
      title: "Clean the washing machine",
      priority: "NORMAL"
    },
    {
      id: 3,
      checked: true,
      title: "Clean the bedroom",
      priority: "LOW"
    },
    {
      id: 4,
      checked: false,
      title: "Buy milk",
      priority: "HIGH"
    }
  ],
  numberOfTodos: 0,
  filterOptions: {
    show: "both",
  },
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setFilterOptions: (state, action: PayloadAction<string>) => {
      state.filterOptions.show = action.payload;
    },
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    checkTodo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((index) => index.id === action.payload);
      state.todos[index].checked = !state.todos[index].checked;
    },
    removeCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.checked);
    }
  },
});

export const { setFilterOptions, addTodo, deleteTodo, checkTodo, removeCompletedTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
